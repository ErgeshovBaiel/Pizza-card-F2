import "./Check.css";
const Check = () => {
  return (
    <div className="l-container">
      <div className="Check">
        <div className="parent-hr">
          <div className="hr"></div>
          <h4
            style={{
              textTransform: "uppercase",
              marginBottom: "10px",
            }}
          >
            Ваш чек
          </h4>
          <div className="hr"></div>
        </div>

        <div>
          <div className="div-text">
            <h5>Наименование</h5>
            <h5 className="h5">Кол-во</h5>
            <h5>Стоимость</h5>
          </div>
          <div className="div2-text">
            <p>
              Миу-пицца с <br />
              пепперони и сюрприз
            </p>
            <p>1.00</p>
            <p>240.00</p>
          </div>
          <div className="div2-text">
            <p>Всего</p>
            <p className="p">1.00</p>
            <p>240.00</p>
          </div>
          <hr className="border" />
        </div>
        <div className="button-DIV">
          <button className="buttonZ">Оформить заказ</button>
        </div>
      </div>
    </div>
  );
};

export default Check;
