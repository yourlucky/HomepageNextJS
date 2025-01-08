export default function Contact() {
  return (
    <div className='p-20'>
      <form
        className='w-[50%] p-20 rounded-[10px] shadow-[0_2px_4px_darkslategray] flex flex-col text-plus bg-white'
        action='/api/contact'
        method='POST'
      >
        <h1 className='text-center font-semibold text-lg'>Get in touch</h1>
        <div className='flex flex-col my-2'>
          <label htmlFor='frm-email' className='mb-2'>
            Email
          </label>
          <input
            name='email'
            placeholder='Email'
            required
            className='text-base p-2 rounded-[5px] border border-[#1f1c1c] bg-[#e8f0fe]'
          />
        </div>
        <div className='flex flex-col'>
          <label htmlFor='frm-phone' className='mb-2'>
            Phone
          </label>
          <input
            name='phone'
            placeholder='Phone'
            required
            className='text-base p-2 rounded-[5px] border border-[#1f1c1c] bg-[#e8f0fe]'
          />
        </div>
        <div className='flex flex-row justify-between my-4'>
          <div className='flex flex-col w-[48%]'>
            <label htmlFor='frm-first' className='mb-2'>
              First Name
            </label>
            <input
              name='first'
              placeholder='Last Name'
              required
              className='text-base p-2 rounded-[5px] border border-[#1f1c1c] bg-[#e8f0fe]'
            />
          </div>
          <div className='flex flex-col w-[48%]'>
            <label htmlFor='frm-last' className='mb-2'>
              Last Name
            </label>
            <input
              name='last'
              placeholder='Last Name'
              required
              className='text-base p-2 rounded-[5px] border border-[#1f1c1c] bg-[#e8f0fe]'
            />
          </div>
        </div>
        <div className='flex flex-col'>
          <label htmlFor='frm-message' className='mb-2'>
            Message
          </label>
          <textarea
            name='message'
            placeholder='Message'
            rows='6'
            className='resize-none p-2 rounded-[5px] border border-[#1f1c1c] bg-[#e8f0fe] text-lg'
          ></textarea>
        </div>
        <div className='flex justify-center mt-6'>
          <button
            type='submit'
            className='px-4 py-2 text-lg font-semibold bg-blue-500 text-white rounded-[5px] hover:bg-blue-600'
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
