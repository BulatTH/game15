<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <script src="js/jquery-3.2.1.min.js"></script>
    <link rel="stylesheet" href="css/style.css">
    <title>Document</title>
</head>
<body>
<div id="wrapper">
    <div id="reg_block"></div>
    <div id="game_block">
        <div id="test"></div>
        <div id="gb_wrapper">
            <div id="game_screen">
                <div id="paused_gameScreen">
                    <div id="returnGame"><p>START</p></div>
                </div>
                <div id="timer"></div>
                <div id="steps">Сделано ходов: <span>0</span></div>
                <span id="title">Пятнашки</span>
                <table id="game_table">
                </table>
            </div>
            <div id="pauseStart_button">
                <div id="pauseButtonSpan_wrapper"><span id="pauseButtonSpan"></span><span id="pauseButtonSpan"></span></div>
            </div>
        </div>

    </div>
    <div id="results_block"></div>

</div>

<script src="js/main.js"></script>
</body>
</html>