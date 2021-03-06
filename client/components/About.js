import React from 'react';
import {
    PageHeader
} from 'react-bootstrap';

export default () => (
    <div>
        <PageHeader>О программе</PageHeader>
        <p>Данный программный продукт предназначен для подготовки обучающихся к самостоятельной работе на радиорелейной станции Р-427.</p>
        <ul>            
            <li>Год разработки: 2017 г. </li>
            <li>Версия: v1.0</li>
            <li>.NET Framework v4.6.1</li>
        </ul>
        <h4>Минимальные системные требования к ПЭВМ:</h4>
        <ul>            
            <li>Частота процессора: 1 ГГц;</li>
            <li>Оперативная память: 1024 Мб;</li>
            <li>Операционная система: Windows 7, 8, 10.</li>
        </ul>
    </div>
)
