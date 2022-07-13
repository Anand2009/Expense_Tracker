import React from 'react'

export default function Form() {

    //const {register, handleSubmit, resetField} = useForm();
    //const [addTransaction] = api.useAddTransactionMutation();

    // const onSubmit = async (data) => {
    //     if(!data) return {};
    //     await addTransaction(data).unwrap();
    //     resetField('name');
    //     resetField('amount')
    // }

  return (
    <div className="form max-w-sm mx-auto w-96">
        
        <h1 className='font-bold pb-4 text-xl'>Transaction</h1>

        <form id='form'>
            <div className="grid gap-4">
                <div className="input-group">
                    <input type="text" placeholder='Sallary, House Rend, SIP' className='form-input' />
                </div>
                <select className='form-input'>
                    <option value="Investment" defaultValue>Investment</option>
                    <option value="Expense">Expense</option>
                    <option value="Savings">Savings</option>
                </select>
                <div className="input-group">
                    <input type="text" placeholder='Amount' className='form-input' />
                </div>
                <div className="submit-btn">
                    <button className='border py-2 text-white bg-indigo-500 w-full'>Make Transaction</button>
                </div>
            </div>    
        </form>

    </div>
  )
}
