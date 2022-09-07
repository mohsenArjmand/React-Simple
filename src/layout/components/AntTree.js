import { Switch, Tree } from 'antd';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {ADDRESS_DEFAULT} from '../constants/Constant.js'

export default function AntTree(treeData) {
  const nav = useNavigate() 
  const [showLine, setShowLine] = useState(true);
  const [showIcon, setShowIcon] = useState(false);
  const [showLeafIcon, setShowLeafIcon] = useState(true);
  const  goToTheAddress = (tolink,title) => {
  console.log(tolink+title)
      nav(tolink)
    }
  const onSelect = (selectedKeys, info) => {
    console.log('selected', selectedKeys, info); 
    const slcnodekey= info.selectedNodes[0].key
    const slcnodetitle= info.selectedNodes[0].title
    const addressToOpen = `${ADDRESS_DEFAULT}${slcnodekey}`
    console.log(addressToOpen, { addressToOpen }) 
    console.log(addressToOpen+slcnodetitle) 
    //const navtoAdd = NavigateToLink()
    goToTheAddress(addressToOpen,slcnodetitle)
    //goToTheAddress(addressToOpen)

    //Navigate(addressToOpen)
    //window.location.href=slcnodekey 
    // return (<Routes>
    // <Route path='/'addressToOpen element={<NoPage/>}/>
    // </Routes>)
  };

  const onSetLeafIcon = (checked) => {
    setShowLeafIcon(checked);
    setShowLine({
      showLeafIcon: checked,
    });
  };

  const onSetShowLine = (checked) => {
    setShowLine(
      checked
        ? {
          showLeafIcon,
        }
        : false,
    );
  };

  return (
    <div>
      <div
        style={{
          marginBottom: 16,
          direction: 'rtl'
        }}
      >
        خطوط: <Switch checked={!!showLine} onChange={onSetShowLine} />
        <br />
        آیکون شاخه ها: <Switch checked={showIcon} onChange={setShowIcon} />
        <br />
        آیکون برگها: <Switch checked={showLeafIcon} onChange={onSetLeafIcon} />
      </div>
      <Tree
        showLine={showLine}
        showIcon={showIcon}
        defaultExpandedKeys={['0-0-0']}
        onSelect={onSelect}
        treeData={treeData}
      />
    </div>
  );
};
