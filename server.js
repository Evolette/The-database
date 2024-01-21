const express = require("express")
const app = express()
const port = 8000
const contacts = [
      {
          id: 1,
          fio: "Нагиев Дмитрий Петрович",
          e_mail: "noga@gmail.com",
          telephon: "+7932178996",
      },
      {
          id: 2,
          fio: "Тесникова Варавара Васильевна",
          e_mail: "tesnicovaVarvar12@gmai.com",
          telephon: "+78652389423",
      },
      {
          id: 3,
          fio: "Хакимов Артем Максимович",
          e_mail: "ham33@yandex.ru",
          telephon: "+78342124598",
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