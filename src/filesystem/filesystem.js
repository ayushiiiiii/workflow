import React, {useState} from 'react';
import './filesystem.css';
import { FileManager, FileNavigator } from '@opuscapita/filemanager-packages/packages/client-react/lib';
import connectorNodeV1 from '@opuscapita/filemanager-packages/packages/connector-node-v1';
import { baseUrl } from '../baseurl';
import getMess from '@opuscapita/filemanager-packages/packages/client-react/src/translations';
import api from '@opuscapita/filemanager-packages/packages/connector-node-v1/lib/api';
import onFailError from '@opuscapita/filemanager-packages/packages/connector-node-v1/lib/utils/onFailError';
import sanitizeFilename from 'sanitize-filename';
import {Modal, Button, Form} from 'react-bootstrap';

function onCloseForm(setIsDialogOpen, setValidForm, setFolderName, setDriveLink){
  setIsDialogOpen(false);
  setValidForm(false);
  setFolderName('');
  setDriveLink('');
}

function onValidateForm(event, folderName, driveLink, setValidForm, setFolderName, setDriveLink){
  var currentFolderName = folderName;
  var currentDriveLink = driveLink;
  if(event.target.name==="folderName"){
    currentFolderName = event.target.value;
    setFolderName(event.target.value);
  } else {
    currentDriveLink = event.target.value;
    setDriveLink(event.target.value);
  }
  setValidForm(currentFolderName
    && currentDriveLink
    && currentFolderName !== 'CON'
    && folderName.length < 255
    && folderName.trim() === sanitizeFilename(folderName.trim())
  );
}

async function onSubmit(folderName, driveLink, setIsDialogOpen,setValidDialog, setFolderName, setDriveLink, actions, apiOptions){
  const {
    showDialog,
    hideDialog,
    navigateToDir,
    updateNotifications,
    getResource,
    getNotifications
  } = actions;

  const resource = getResource();
  const getMessage = getMess.bind(null, apiOptions.locale);
  const label = 'createDriveLink';
  try {
    const resourceChildren = await api.getChildrenForId(apiOptions, { id: resource.id });
    const alreadyExists = resourceChildren.some(({ name }) => name === folderName);

    if (alreadyExists) {
      onCloseForm(setIsDialogOpen, setValidDialog, setFolderName, setDriveLink);
      alert('Folder '+folderName+' already exists');
      return getMessage('fileExist', { name: folderName });
    } else {
      hideDialog();
      const result = await api.createDriveLink(apiOptions, resource.id, folderName, driveLink);
      navigateToDir(resource.id, result.body.id, false);
    }
  } catch (err) {
    hideDialog();
    onFailError({
      getNotifications,
      label: getMessage(label),
      notificationId: label,
      updateNotifications
    });
    console.log(err);
  }
  setDriveLink('');
  setFolderName('');
  setValidDialog(false);
  setIsDialogOpen(false);
  return null;
}

function FileSystem(props){
  const apiOptions = {
    ...connectorNodeV1.apiOptions,
    apiRoot: baseUrl+'files'
  }

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [validDialog, setValidDialog] = useState(false);
  const [folderName, setFolderName] = useState('');
  const [driveLink, setDriveLink] = useState('');
  var [actions, setActions] =useState();
  var [fileApiOptions, setApiOptions] = useState();

  return(
    <div style={{ height: '540px' }} className={(props.upload?"":"hideUpload ")+(props.download?"":"hideDownload")}>
      <FileManager>
        <FileNavigator
          id={props.fileId}
          api={connectorNodeV1.api}
          apiOptions={apiOptions}
          capabilities={(apiOptions, actions) => ([
            ...(connectorNodeV1.capabilities(apiOptions, actions)),
            ({
              id: 'create-drive-link',
              icon: {
                svg: '<img style="width: 25px" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAAByElEQVRIie3UvWvVUBzG8c/1peKkVYtihYI6ORSsk+Ci4KbooktRQXARVJCC2KmLIv0LXKx0loLgogiiUBdfUBAEob6Nolccql1s45AEjjG55zbpJPeBH4Rznt/zPckJP3rqKdUhzCGJ1FzmXRFtRLsLaF5t9K8EeDIIHcdOLETgk02hg/gZBN7O1ici4AUMNQFPFwKfZuvr8T4Cn64LHcZiIexbsH80Al7ESB3wg4rAzYHnXgR+f7nQgx3C9ge+IX//A2V1uFvoKrzoEHSm4J+IgF9nmVGdigRdy3wncQLr8C7SMxqD9on/rUewBV/wFVuxAafxEEslPR+zA1ZqLAKdyXx3grW7hYwduIRXhd7LoakVPPdLZ+2mikPNY4/0vsYLe9fxuaRnH87jLL5jF34UTVcr3jKvsYoDrc4OndegdKzmNSL9UgmulAXc6gB9g7WBtw83Iwctqxtl4GMV5iUcCHzbMFsDOp99gX/UwvOShqnAsxefakATXCiD5jpeMLcxkO2N4ldN6KzIEGnhWdBwDmukd1MHmEhH6u5O0Fz5XX+QzuVHDaAJLnYDzd/6ZUNYXk90OadzDeNtA+BvPMb25UB7+r/0BydpUaxJSuwLAAAAAElFTkSuQmCC"/>'
              },
              label: 'Create Drive Link',
              shouldBeAvailable: () => true,
              availableInContexts: ['files-view', 'new-button'],
              handler: () => {
                setActions(actions);
                setApiOptions(apiOptions);
                setIsDialogOpen(true);
              }
            })
          ])}
          listViewLayout={connectorNodeV1.listViewLayout}
          viewLayoutOptions={connectorNodeV1.viewLayoutOptions}
          initialResourceId={props.fileId}
        />
      </FileManager>
      <Modal
        show={isDialogOpen}
        onHide={() => onCloseForm(setIsDialogOpen,setValidDialog,setFolderName,setDriveLink)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Create Drive Link
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
          <Form.Group controlId="folderName">
            <Form.Label>Folder Name</Form.Label>
            <Form.Control type="text" name="folderName" value={folderName} onChange={(event) => onValidateForm(event, folderName, driveLink, setValidDialog, setFolderName, setDriveLink)} placeholder="Enter folder name" />
          </Form.Group>

          <Form.Group controlId="folderLink">
            <Form.Label>Drive Link</Form.Label>
            <Form.Control type="text" name="driveLink" value={driveLink} onChange={(event) => onValidateForm(event, folderName, driveLink, setValidDialog, setFolderName, setDriveLink)} placeholder="Enter Drive Link" />
          </Form.Group>
        </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => onCloseForm(setIsDialogOpen,setValidDialog,setFolderName,setDriveLink)}>Close</Button>
          <Button disabled={!validDialog} onClick={() => onSubmit(folderName, driveLink, setIsDialogOpen, setValidDialog, setFolderName, setDriveLink, actions, fileApiOptions)} variant="primary">Create</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default FileSystem;