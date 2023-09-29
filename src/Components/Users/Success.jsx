import './Users.css';
import success from '../../utils/images/success.svg';

function Success({ count }) {
  return (
    <div className="success-block">
      <img className="success-block__img" src={success} alt="Success" />
      <h3>Успешно!</h3>
      <p>Всем {count} пользователям отправлено приглашение.</p>
      <button className="send-invite-btn" onClick={() => window.location.reload()}>Назад</button>
    </div>
  );
}

export default Success;
