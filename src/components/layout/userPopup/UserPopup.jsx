import React from 'react'
import Popup from "../../shared/Popup/Popup"
import { useUserPopupContext } from '../../../context/UserPopupContext';
import UserPopupLinks from '../../shared/Popup/UserPopupLinks';

export default function UserPopup() {
  const { showUserPopup, closeUserPopup } = useUserPopupContext();
  return (
    <Popup open={showUserPopup} handleClose={closeUserPopup}>
      <UserPopupLinks></UserPopupLinks>
    </Popup>
  )
}
