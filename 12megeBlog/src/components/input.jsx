import React, {useId} from 'react'

const Input = React.forwardRef( function Input({
    label,
    type = "text",
    className = "",
    ...props
}, ref){
    const id = useId()
    return (
        <div className='w-full'>
            {label && <label 
            className='inline-block mb-1 pl-1' 
            htmlFor={id}>
                {label}
            </label>
            }
            <input
            type={type}
            className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
            ref={ref}
            {...props}
            id={id}
            />
        </div>
    )
})

export default Input



// Import React + useId
//         ↓
// Create reusable Input using forwardRef
//         ↓
// Receive label, type, className, other props and ref
//         ↓
// Generate unique ID
//         ↓
// If label exists → display label
//         ↓
// Connect label and input using htmlFor + id
//         ↓
// Render input
//         ↓
// Apply type + CSS
//         ↓
// Forward ref to actual input
//         ↓
// Pass remaining props



// 5.37