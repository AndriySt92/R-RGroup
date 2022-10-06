export const phoneValidation = (phone) => {
    phone = phone.replace(/[\s\-\(\)]/g, '');
    const pattern = new RegExp(/^((\+?3)?8)?0\d{9}$/);
    if(!pattern.test(phone)){
        return true
    }
    return false
}

export const lengthValidation = (min, max, value) => {
    if(value.length < min || value.length > max){
  
        if(!value){
            return 'Будь ласка введіть ваші дані!'
        } 

        if(min == 0){
            return `Максимальна кількість символів - ${max} символів!`
        }

        return `Кількість символів від ${min} до ${max} символів!`
    } 
    return ''
}
