import GeneralSettingUI from '@/app/ui/store/settings/general-setting/GeneralSettingUI'
import React from 'react'

const GeneralSetting = () => {
  return (
    <>
        <div className="heading mb-2">
      <h4 className="h4 fw-bold">General Setting</h4>
    </div>
    <GeneralSettingUI /> 
    </>
  )
}

export default GeneralSetting