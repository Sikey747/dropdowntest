Дроп даун меню

1. есть несколько видов меню
на пк 
это открытие при ховере 
открытие при клике
на мобилке
всегда открытие при клике
так же есть большие и маленькие дропа даун меню
с большими уровнями вложености и анимацией

больщой уровень вложености это плохо обычно есть топ меню дропдаун меню и саб меню это максимум 
чаще вобще 2 уровня вложености топ меню и дроп даун меню
потому что потдерживать код с большим количеством вложеностей тяжело 
и писать его тяжело учитывая все зависимости что на каком уровне что открывет закрывает и что на что реагирует при наведении и нажатии
по этому если есть больше 2х уровней вложености то лучше пускай дизайнер меняет дизайн

но если нужны все таки еще меню то просто добавляй саб меню в каждом саб меню типо top-menu -> drop-down-menu -> sub-menu -> sub-sub-menu -> sub-sub-sub-menu

суть хорошего дроп даун меню в том что у него должна быть стрелка которая показывает что 
тут можно что то открыть 
и на компе она работает по ховеру а на мобилках при клике

что бы добиться такого результата надо 
для компа здать глобальный класс mouse
а для мобилок планшетов tuche
и только когда эти клас активны добавлять в них ховеры и активные классы
по которым осуществляеться открытие контента

и важно помнить что надо не тольео показать контент но и повернуть стрелку 

и повернуть стрелку в нужном напрвлении в зависимости от дизайна

следующий важный момент что когда пользователь не нажимает на наш дроп даун 
то наше меню закрываеться

еще момент дроп даун меню почти всегда живет в 2 формах 
большом и маленьком 

в большом все блоки меню становятья абстрактными и прилепают к ли

и тут надо их анемировать по одному способу и показывать

а когда мы на мобилках то они становяться релейтив тоесть появляеться их размер и высота 
они становяться размеро задающими значет надо их показывать и прятать по своему

так же нажо понимать что на дизайне могут быть разные стрелки или иконки по этому их надо менять
и кастомезировтаь

и так же бывают дроп даун меню многоуровневые 
тоесть с сабменю 
тут надо просто каждое новое меню называть к примеру sub-sub-menu или придумать 
другой способ как делать много вложений
в остальном сложности нету кроме того что надо перебирвать много файлов с разынми уровнями вложености и придумывать многоуровневые структуры

последнее важное для дроп даун меню это анимации 
надо сделать несколько видов что бы можно было их вызывать в зависимости от задач

по факту надо сделать шаблон для хедера для разных задачь 
что бы когда мы загружали стартовый шаблон у нас был уже готов хедер с самой сложнйо задачай много уровневым меню
а если нам не надо много уровневое меню мы его убираем оставляем 1 уровень и просто стилизируем как нам надо
а если все таки нужен то он у нас уже готов и мы можем с нми работать мення анимации

надо тоже самое сделать и с футтером так как они там тоже почти все одинаковые 