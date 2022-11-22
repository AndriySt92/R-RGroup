import react from 'react'

export const Alert = ({ type }) => {
    
  return (
    <div className={`alert ${type === 'success' ? 'alert-success' : 'alert-danger'}`} role="alert">
      {type === 'success' ? (
        <>
          <h5 class="alert-heading">ДЯКУЄМ, ЩО ВИБРАЛИ НАС!</h5>
          <span>Hаш менеджер обовязкова звяжеться з вами!</span>
        </>
      ) : (
        <>
          <h5 class="alert-heading">Виникла помилка!</h5>
          <span>Будь ласка споробуйте відправити ще раз!</span>
        </>
      )}
    </div>
  )
}
