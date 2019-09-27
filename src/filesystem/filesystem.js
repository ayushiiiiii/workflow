import React from 'react';
import css from'./filesystem.css';
import { FileManager, FileNavigator } from '@opuscapita/react-filemanager';
import connectorNodeV1 from '@opuscapita/react-filemanager-connector-node-v1';
import { baseUrl } from '../baseurl';

function FileSystem(props){
  const apiOptions = {
    ...connectorNodeV1.apiOptions,
    apiRoot: baseUrl+'files'
  }
  return(
    <div style={{ height: '480px' }}>
      <FileManager>
        <FileNavigator
          id={props.fileId}
          api={connectorNodeV1.api}
          apiOptions={apiOptions}
          capabilities={connectorNodeV1.capabilities}
          listViewLayout={connectorNodeV1.listViewLayout}
          viewLayoutOptions={connectorNodeV1.viewLayoutOptions}
          initialResourceId={props.fileId}
        />
      </FileManager>
    </div>
  );
}

export default FileSystem;