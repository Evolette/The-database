const express = require("express")
const app = express()
const port = 8000
const contacts = [
{ 
      id: 1,
      fio: "Стаценко Марина Федоровна",
      e_mail: "statsenco2502@gmail.com",
      telephon: "+79123876234",
},
{
      id: 2,
      fio: "Нагиев Дмитрий Петрович",
      e_mail: "noga@gmail.com",
      telephon: "+79123876234",
},
{
      id: 3,
      fio: "Тесникова Варавара Васильевна",
      e_mail: "tesnicovaVarvar12@gmai.com",
},
{
      id: 4,
      fio: "Хакимов Артем Максимович",
      e_mail: "ham33@yandex.ru",
      telephon: "+783421245",
}
]
app.get('/', (req, res) => {
      res.set({
          "Content-Type": "application/json",
      })
      res.json(JSON.stringify(contacts))
  })
  app.listen(port, () => {
      console.log(`Мы начали прослушивать ${port} порт.`)
  })