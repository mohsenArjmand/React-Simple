import { Switch, Tree } from 'antd';
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {ADDRESS_DEFAULT} from '../constants/Constant.js'
import NavLinkPersonal from './NavLinkPersonal.js'; 

export default function AntTree(treeData) {
  const [showLine, setShowLine] = useState(true);
  const [showIcon, setShowIcon] = useState(false);
  const [showLeafIcon, setShowLeafIcon] = useState(true);

  const onSelect = (selectedKeys, info) => {
    console.log('selected', selectedKeys, info); 
    const slcnodekey= info.selectedNodes[0].key
    const slcnodetitle= info.selectedNodes[0].title
    const addressToOpen = `${ADDRESS_DEFAULT}${slcnodekey}`
    console.log(addressToOpen, { addressToOpen }) 
    console.log(addressToOpen+slcnodetitle) 
    window.location.href=slcnodekey 
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
