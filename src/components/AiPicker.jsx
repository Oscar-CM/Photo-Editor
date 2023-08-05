import React from 'react';
import CustomButton from './CustomButton';


const AiPicker = ({ prompt, setPrompt, generatingImg, handleSubmit}) => {
  return (
    <div className='aipicker-container'>
      <textarea
      
      placeholder='AsK AI'
      rows={5}
      value={prompt}
      onChange={(e) => setPrompt(e.target.value)}
      className='aipicker-textarea'
      
      />
      <div className='flex flex-wrap gap-3'>
        <CustomButton
        type='outline'
        title='AI logo'
        handleClick={() => handleSubmit('logo')}
        customStyles='text-xs'
        
        />
        <CustomButton
        type='outline'
        title='AI logo'
        handleClick={() => handleSubmit('logo')}
        customStyles='text-xs'
        />

      <CustomButton
        type='filled'
        title='AI Full'
        handleClick={() => handleSubmit('full')}
        customStyles='text-xs'
        />


      </div>

    </div>
  )
}

export default AiPicker