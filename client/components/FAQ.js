import React from 'react';
import {
    PageHeader
} from 'react-bootstrap';
import '../assets/f1.jpg';
import '../assets/f2.jpg';
import '../assets/f3.jpg';
import '../assets/f4.jpg';
import '../assets/f5.jpg';
import '../assets/f6.jpg';
import '../assets/f7.jpg';
import '../assets/f8.jpg';
import '../assets/f9.jpg';
import '../assets/f10.jpg';
import '../assets/f11.jpg';
import '../assets/f12.jpg';
import '../assets/f13.jpg';
import '../assets/f14.jpg';
import '../assets/f15.jpg';
import '../assets/f16.jpg';
import '../assets/f17.jpg';
import '../assets/f18.jpg';
import '../assets/f19.jpg';
import '../assets/f20.jpg';
import '../assets/f21.jpg';
import '../assets/f22.jpg';
import '../assets/f23.jpg';
import '../assets/f24.jpg';
import '../assets/f25.jpg';
import '../assets/f26.jpg';
import '../assets/f27.jpg';
import '../assets/f28.jpg';
import '../assets/f29.jpg';
import '../assets/f30.jpg';
import '../assets/f31.jpg';

export default () => (
    <div className='faq'>
        <PageHeader>Порядок работы</PageHeader>
        <p>Перед началом работы на радиорелейной станции необходимо ознакомиться с принципом работы Р-427, а также требованиями безопасности в целях снижения риска возникновения несчастных случаев и выхода из строя оборудования станции.
        Упомянутая информация представлена как в данной обучающей программе, так и в официальных руководствах от разработчика радиорелейной станции, которые можно изучить в разделе «Практика». В данном подразделе представлено описание порядка работы на радиорелейной станции Р-427 с уточнениями касательно особенностей обучающей программы.</p>

        <strong> <p className="text-center">Подготовка к работе</p> </strong>

        <p><strong>1. </strong>Перед включением станции необходимо провести ее внешний осмотр. Проверить правильность и надежность подключения кабелей. <br/>
        <strong>2. </strong>Переключатель «ПИТАНИЕ» приемопередающего устройства установить в положение «ВКЛ.», после чего индикатор «СИСТ.» заморгает зеленым цветом. <br/>
        <strong>3. </strong>После загрузки внутренней программы приемопередающего устройства (примерно че-рез 30-40 с) загорятся индикаторы: «РАДИО», «ВНУТР. БЛОК», «МОДЕМ», а индикатор «СИСТ.» перестанет моргать. Радиорелейная станция готова к работе.</p>

        <p className="text-center"><strong>Подключение станции к ПЭВМ</strong></p>

        <p>Для подключения станции к компьютеру могут использоваться интерфейсы RS-232 и Ethernet 10\100\1000 для управления оборудованием с помощью ПО HyperTerminal и Web-браузера соответственно. Безусловно, для настройки станции первым способом необходима установленная на ПЭВМ актуальная версия программы HyperTerminal, а вторым – один из поддерживаемых браузеров (Opera, Google Chrome, Mozilla Firefox, IE или подобный). <br/>
        В данном руководстве будет подробно описана настройка РРС Р-427 с помощью Web-интерфейса применительно к реальной станции. Программа для обучения работе является упрощенной и включает в себя основы, необходимые для подготовки специалистов к конфигурации реального оборудования.</p>

        <p>После включения оборудования и соединения ПЭВМ с ППУ Р-427 с помощью кабеля типа FTP-5 можно начинать работу по настройке станции. <br/>
        <strong>ВНИМАНИЕ!</strong> Для корректного управления Р-427 длина сетевого кабеля FTP не должна превышать 100 м.</p>

        <p className="text-center"><strong>Конфигурация соединения для управления по Ethernet</strong></p>

        <p>Перед тем, как приступить к первоначальной настройке Р-427 с помощью Web-интерфейса, необходимо выполнить конфигурацию подключения Ethernet на ПК следующим образом (<strong>для работы с обучающей программой в данной настройке нет необходимости</strong>): </p>
        <p>1)	В операционной системе «MS Windows 7» перейдите к Пуск -> Панель управления -> Центр управления сетями и общим доступом (или нажать правой кнопкой мыши на иконку подключения к сетям и через контекстное меню выбрать пункт «Центр управления сетями и общим доступом»);</p>
        <p>2)	Левой кнопкой мыши нажмите «Подключение по локальной сети» и в появившемся окне выберите пункт «Свойства»;</p>
        <img src='img/f16.jpg' />
        <p>3)	 Из списка в диалоговом окне выберите «Протокол Интернета версии 4 (TCP/IPv4)» и нажмите «Свойства»;</p>
        <img src='img/f9.jpg' />
        <p>4)	В диалоговом окне при первоначальном запуске необходимо ввести ту же подсеть с IP-адресами, которые установлены в Р-427 по умолчанию. Необходимый IP-адрес и маска подсети приведены на рисунке ниже.</p>
        <img src='img/f14.jpg' />

        <p>Ethernet-соединение с Р-427 настроено, можно приступать к работе с Web-интерфейсом. <strong>2.1.3 Соединение с Web-интерфейсом</strong> </p>
        <p>Рекомендуется использовать следующие Web-браузеры (и их более поздние версии): </p>
        <ul>
            <li> IE v. 6.0; </li>
            <li> Mozilla Firefox v. 2.0.0.11; </li>
            <li> Safari v. 3.0; </li>
            <li> Opera v. 9.50; </li>
            <li> Google Chrome. </li>
        </ul>
        <p><strong>ВНИМАНИЕ!</strong> В связи с особенностями языка программирования обучающей программы применять ее в браузере Internet Explorer невозможно.</p>

        <p>После выбора браузера, откройте его и введите в строке ввода URL-адреса IP-адрес Р-427. </p>
        <p>Примечание – Первоначальные адреса Р-427: </p>
        <p>IP-адрес Р-427 исполнения «Н» по умолчанию <strong>192.168.205.10</strong>.</p>
        <p>IP-адрес Р-427 исполнения «В» по умолчанию <strong>192.168.205.11</strong>.</p>

        <img src='img/f7.jpg' />

        <p><ins>В обучающей программе после запуска необходимо сразу вводить IP-адрес требуемой станции.</ins></p>

        <img src='img/f18.jpg' />

        <p>IP-адреса по умолчанию присвоены следующие: <br/>
        IP-адрес локальной Р-427 исполнения «В» по умолчанию <strong>192.168.205.10</strong>.<br/>
        IP-адрес удаленной Р-427 исполнения «Н» по умолчанию <strong>192.168.205.11</strong>.<br/>
        Маска подсети для обеих станций: <strong>255.255.255.0</strong><br/>
        Не следует изменять структуру IP-адресов. Поменять можно последний октет.</p>

            <p>После правильного ввода IP-адреса подключенной станции появится окно авторизации. По умолчанию для доступа к Web-интерфейсу:</p>
        <ul>
            <li> имя пользователя: <strong>«admin»</strong>;  </li>
            <li> пароль: <strong>«changeme»</strong>. </li>
        </ul>

        <p><strong>ВНИМАНИЕ!</strong> Для обучающей программы по умолчанию имя пользователя и пароль следующие:</p>
        <ul>
            <li> имя пользователя: <strong>«admin»</strong>;  </li>
            <li> пароль: <strong>«password»</strong>. </li>
        </ul>

        <img src='img/f19.jpg' />

        <p>Если логин и пароль введены верно, то пользователь получает доступ к Web-интерфейсу, если же была допущена ошибка, появляется информационное окно о неправильном вводе логина/пароля. <strong>В обучающей программе присутствует возможность сбросить логин и пароль до значения по умолчанию с помощью соответствующей кнопки.</strong> </p>
        <img src="img/f20.jpg" />

        <p>Первым открытым окном будет «Статус РРЛ», информирующий оператора о состоянии радиорелейной линии, локального и удаленного оборудования (при установлении связи). </p>
        <img src='img/f10.jpg' />

        <p>Это же окно обучающей программы представлено в упрощенном виде:</p>
        <img src='img/f21.jpg' />

        {/*<p>Для выполнения основной конфигурации Р-427, вначале следует запустить «Конфигу-рацияМастер конфигурации» (по умолчанию установка мощности передачи отключена и параметры удаленной стороны не отображаются).*/}
        {/*Если в полях, отображающих состояния Локальной/Удаленной сторон РРЛ, параметры выходят за допустимые пределы, соответствующие ячейки будут подсвечиваться красным цветом.*/}
        {/*Чтобы начать процесс первоначальной конфигурации, нужно запустить мастер настро-ек, который установит основные параметры соединения, необходимые для начала его работы. Таким образом, первый шаг состоит в том, чтобы перейти в «Конфигурация -> Мастер Конфигурации», как показано на рисунке.</p>*/}
        {/*<img src='img/f3.jpg' />*/}
        <p>Далее будет приведен порядок работы с обучающей программой с учетом ее особенностей. Все возможности по настройке реальной станции представлены в соответствующих руководствах по эксплуатации.</p>

        <p className="text-center"><strong>Мастер конфигурации</strong></p>

        <p>Мастер конфигурации позволяет пошагово произвести основную настройку станции. Чтобы его открыть, необходимо открыть контекстное меню «Конфигурация» и выбрать в нем пункт «Мастер конфигурации». После этого правее появится окно первого шага мастера. </p>
        <img src='img/f22.jpg' />

        <p>Здесь обязательно требуется задать название РРС и при необходимости ее местоположение. Также в данном шаге можно установить новый пароль для первоначальной авторизации. После нажатия кнопки «Далее» произойдет переадресация на вторую страницу мастера конфигурации, где будет необходимо задать сетевые параметры IP, путем введения IP- адреса и маски подсети. IP шлюза вводить необязательно.</p>
        <img src='img/f23.jpg' />

        <p><strong>Примечание.</strong> В случае изменения IP-адреса станции и сохранения новых параметров, произойдет перенаправление пользователя в имитатор Web-браузера для повторного подключения станции по новому IP-адресу, так как в таком случае в реальности сессия управления будет прервана.</p>

        <p>Третья страница мастера настройки предназначена для конфигурации модема и прие-мопередающего устройства и требует задать необходимую ширину полосы пропускания ра-диоканала, вид модуляции (4QAM, 16QAM, 32QAM, 64QAM или 128QAM), включение пор-тов Е1, мощность передатчика (диапазон зависит от выбранной модуляции) и частоту передатчика.</p>
        <img src='img/f24.jpg' />

        <p>Последняя страница мастера настройки позволяет проверить выбранные настройки и применить их.</p>
        <img src='img/f25.jpg' />

        <p className="text-center"><strong>Другие возможности настройки</strong></p>

        <p>В обучающей программе также реализованы три отдельных пункта конфигурации:<br/> «Основная конфигурация», <br/>«Конфигурация системы», <br/>«Конфигурация сети». Данные пункты позволяют осуществить настройку определенных параметров без прохождения всех трех шагов «Мастера конфигурации».</p>

        <p>Данные пункты позволяют осуществить настройку определенных параметров без прохождения всех шагов «Мастера конфигурации».</p>
        <p>Основная конфигурация включает в себя настройку мощности передатчика, частоты передачи, выбор модуляции и ширины полосы радиоканала, а также имитация включения портов Е1.</p>

        <img src='img/f26.jpg' />
        <p>Конфигурация системы позволяет изменить пароль, название станции и ее местоположение, а также синхронизировать рабочее время со временем, установленным на ПЭВМ.</p>

        <img src='img/f27.jpg' />
        <p>Конфигурация сети предназначена для изменения IP-адреса станции.</p>
        <img src='img/f28.jpg' />

        <p>Во всех пунктах после нажатия кнопки «Применить» установленные настройки только применятся. Нажатие кнопки «Сохранить» применит имеющиеся настройки и вернет пользователя на страницу «Статус РРЛ». </p>
        <p>В случае неверного ввода данных появится уведомление с просьбой корректировки требуемых настроек в соответствии с требованиями.</p>
        <p>После окончания настройки одной станции, необходимо нажать кнопку «Выход» и повторить те же действия на другой РРС.</p>
        <img src='img/f29.jpg' />

        <p>Обращаем внимание, что частота передачи одной станции, должна соответствовать частоте приема другой станции. Также на обоих станциях должен быть установлен один и тот же вид модуляции. Через несколько секунд после настройки второй РРС, между станциями будет установлена связь и появится соответствующее окно уведомления.</p>
        <img src='img/f30.jpg' />
        <p>В таком случае появится возможность просмотреть параметры, установленные на противоположной станции. В случае какого-либо изменения определяющих настроек (частоты передачи, вида модуляции) связь прервется, о чем пользователь также будет уведомлен.</p>
        <img src='img/f31.jpg' />

        <p>Таким образом, осуществляется основная настройка оборудования радиорелейной станции Р-427 в данной обучающей компьютерной программе.</p>
    </div>
);
