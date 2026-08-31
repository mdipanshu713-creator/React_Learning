what is forward refernce explained with eg ?

Ans- Sir we creating our login form ,in this login form input field are differnt ,we use same input field use in same in username,password, 

or 
Sir, suppose we are creating a login form. We have a reusable Input component which we use for both Username and Password fields. Sometimes the parent Login component needs direct access to the actual input element, for example to automatically focus the Username field. Since the Input is a custom component, we use forwardRef to forward the ref from the parent component to the actual input element inside the reusable Input component."
