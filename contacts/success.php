<!DOCTYPE html>
<html lang="ru">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Успешная отправка</title>

    <style>
        body {
            font-family: Arial, sans-serif;
            height: 100vh;
            /* высота страницы */
            color: var(--base-white);
            background: linear-gradient(to bottom, #001d3d, #003566);
            /* Синее небо */
            display: flex;
            align-items: center;
        }

        main {
            width: 100vh;
            display: block;
        }

        .container {
            width: 75%;
            text-align: center;
            background-color: white;
            /* белый фон */
            padding: 20px;
            border-radius: 10px;
            /* закругленные углы */
            box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
            /* тень */
            margin: auto;
            display: flex;
            flex-direction: column;
            align-self: center;
        }

        .button {
            margin-top: 20px;
            padding: 10px 20px;
            background-color: #003566;
            /* зеленая кнопка */
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 16px;
        }

        .button:hover {
            background-color: #001d3d;
            /* более темный оттенок при наведении */
        }
    </style>
</head>

<body>
    <main>
        <div class="container">
            <h1>Спасибо за ваше сообщение!</h1>
            <p>Я свяжусь с вами в ближайшее время.</p>
            <button class="button" onclick="window.location.href='../index.html'">Вернуться на главную</button>
        </div>
    </main>
</body>

</html>