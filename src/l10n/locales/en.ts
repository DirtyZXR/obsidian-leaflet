export default {
    //main.ts
    "Loading Obsidian Leaflet v%1": "Загрузка Obsidian Leaflet v%1", //version number
    "Open Leaflet Map": "Открыть карту Leaflet",
    "Unloading Obsidian Leaflet": "Выгрузка Obsidian Leaflet",
    "Obsidian Leaflet maps must have an ID.":
        "Карта Obsidian Leaflet должна иметь идентификатор.",
    "ID required": "Требуется идентификатор",
    "There was an error saving into the configured directory.":
        "Ошибка при сохранении в указанную директорию.",

    //renderer.ts
    "Could not parse GeoJSON file": "Не удалось разобрать файл GeoJSON",
    "Could not parse overlay radius. Please make sure it is in the format `<length> <unit>`.":
        "Не удалось разобрать радиус наложения. Убедитесь, что формат: `<длина> <единица>`.",
    "There was an error with the provided latitude. Using default.":
        "Ошибка в указанной широте. Используется значение по умолчанию.",
    "There was an error with the provided longitude. Using default.":
        "Ошибка в указанной долготе. Используется значение по умолчанию.",

    //loader.ts
    "There was an issue getting the image dimensions.":
        "Не удалось получить размеры изображения.",

    //watcher.ts
    "There was an error updating the marker for %1.":
        "Ошибка при обновлении маркера для %1.", //file name
    "There was an error updating the marker type for %1.":
        "Ошибка при обновлении типа маркера для %1.", //file name
    "There was an error updating the markers for %1.":
        "Ошибка при обновлении маркеров для %1.", //file name

    //utils.ts
    "Coordinates copied to clipboard.": "Координаты скопированы в буфер обмена.",
    "There was an error trying to copy coordinates to clipboard.":
        "Не удалось скопировать координаты в буфер обмена.",
    "There was an error rendering the map":
        "Ошибка при отрисовке карты",
    "Unparseable height provided.": "Указана недопустимая высота.",
    "There was a problem with the provided height. Using 500px.":
        "Проблема с указанной высотой. Используется 500px.",
    "Could not parse latitude": "Не удалось разобрать широту",
    "Could not parse longitude": "Не удалось разобрать долготу",
    "No data for marker %1.": "Нет данных для маркера %1.", //marker code block definition
    "The `%1` field%2 can only be used with the Dataview plugin installed.":
        "Поле `%1`%2 доступно только при установленном плагине Dataview.", //parameter name, plural
    "Could not parse location in %1": "Не удалось разобрать местоположение в %1", //file name
    "Could not parse map overlay length in %1. Please ensure it is in the format: <distance> <unit>":
        "Не удалось разобрать размер наложения в %1. Убедитесь, что формат: <расстояние> <единица>", //file name
    "%1 overlay": "Наложение %1", //file name
    "Could not parse %1 in %2. Please ensure it is in the format: <distance> <unit>":
        "Не удалось разобрать %1 в %2. Убедитесь, что формат: <расстояние> <единица>", //overlayTag, file name

    //units.ts
    meters: "метры",
    petameters: "петаметры",
    terameters: "тераметры",
    gigameters: "гигаметры",
    megameters: "мегаметры",
    kilometers: "километры",
    hectometers: "гектометры",
    decameters: "декаметры",
    decimeters: "дециметры",
    centimeters: "сантиметры",
    millimeters: "миллиметры",
    micrometers: "микрометры",
    nanometers: "нанометры",
    picometers: "пикометры",
    femtometers: "фемтометры",
    feet: "футы",
    inches: "дюймы",
    yards: "ярды",
    miles: "мили",
    "nautical miles": "морские мили",

    //settings.ts
    "Obsidian Leaflet Settings": "Настройки Obsidian Leaflet",
    "Default Map Marker": "Маркер карты по умолчанию",
    "This marker is always available.": "Этот маркер всегда доступен.",
    "Icon Name": "Имя иконки",
    "A default marker must be defined.": "Необходимо задать маркер по умолчанию.",
    "The selected icon does not exist in Font Awesome Free.":
        "Выбранная иконка отсутствует в Font Awesome Free.",
    "Upload Image": "Загрузить изображение",
    "Marker Color": "Цвет маркера",
    "Layer Base Marker": "Базовый маркер слоя",
    "Use as base layer for additional markers by default.":
        "Использовать как базовый слой для дополнительных маркеров по умолчанию.",
    "Additional Map Markers": "Дополнительные маркеры карты",
    "Add Additional": "Добавить",
    "These markers will be available in the right-click menu on the map.":
        "Эти маркеры будут доступны в контекстном меню карты.",
    "Default Latitude": "Широта по умолчанию",
    "Real-world maps will open to this latitude if not specified.":
        "Реальные карты откроются на этой широте, если она не задана явно.",
    "Latitude must be a number.": "Широта должна быть числом.",
    "Default Longitude": "Долгота по умолчанию",
    "Real-world maps will open to this longitude if not specified.":
        "Реальные карты откроются на этой долготе, если она не задана явно.",
    "Longitude must be a number.": "Долгота должна быть числом.",
    "Reset to Default": "Сбросить к значению по умолчанию",
    "Please back up your data before changing this setting.":
        "Сделайте резервную копию данных перед изменением этого параметра.",
    "Current directory": "Текущая директория",
    "Default Config Directory": "Директория конфигурации по умолчанию",
    "Default Marker Tooltip Behavior": "Поведение подсказки маркера по умолчанию",
    "New markers will be created to this setting by default. Can be overridden per-marker.":
        "Новые маркеры будут создаваться с этим параметром по умолчанию. Можно переопределить для каждого маркера.",
    Always: "Всегда",
    Hover: "При наведении",
    Never: "Никогда",
    "Display Note Preview": "Показывать предпросмотр заметки",
    "Markers linked to notes will show a note preview when hovered.":
        "Маркеры, связанные с заметками, будут показывать предпросмотр при наведении.",
    "Display Overlay Tooltips": "Показывать подсказки наложений",
    "Overlay tooltips will display when hovered.":
        "Подсказки наложений будут отображаться при наведении.",
    "Copy Coordinates on Shift-Click": "Копировать координаты по Shift-клику",
    "Map coordinates will be copied to the clipboard when shift-clicking.":
        "Координаты карты копируются в буфер при Shift-клике.",
    "This setting is experimental and could cause marker data issues. Use at your own risk.":
        "Этот параметр экспериментальный и может вызвать проблемы с данными маркеров. Используйте на свой страх и риск.",
    "Import Marker CSV File": "Импорт CSV-файла маркеров",
    "Choose File": "Выбрать файл",
    "Upload CSV File": "Загрузить CSV-файл",
    "Map not specified for line %1": "Карта не указана для строки %1", //line number in csv
    "Could not parse latitude for line %1":
        "Не удалось разобрать широту для строки %1", //line number in csv
    "Could not parse longitude for line %1":
        "Не удалось разобрать долготу для строки %1", //line number in csv
    "Marker file successfully imported.": "Файл маркеров успешно импортирован.",
    "There was an error while importing %1":
        "Ошибка при импорте %1", //csv file name
    "Export Marker Data": "Экспортировать данные маркеров",
    "Export all marker data to a CSV file.":
        "Экспортировать все данные маркеров в CSV-файл.",
    Export: "Экспорт",
    "Enable Draw Mode by Default": "Включить режим рисования по умолчанию",
    "The draw control will be added to maps by default. Can be overridden with the draw map block parameter.":
        "Элемент управления рисованием будет добавляться на карты по умолчанию. Можно переопределить параметром блока карты.",
    "Default Units": "Единицы измерения по умолчанию",
    "Select the default system of units for the map.":
        "Выберите систему единиц измерения для карты по умолчанию.",
    "Default Tile Server": "Тайл-сервер по умолчанию",
    "It is up to you to ensure you have proper access to this tile server.":
        "Убедитесь, что у вас есть доступ к этому тайл-серверу.",
    "Default Tile Server Attribution": "Атрибуция тайл-сервера по умолчанию",
    "Please ensure your attribution meets all requirements set by the tile server.":
        "Убедитесь, что атрибуция соответствует всем требованиям тайл-сервера.",
    "Default Tile Server (Dark Mode)": "Тайл-сервер по умолчанию (тёмная тема)",

    Imperial: "Имперская",
    Metric: "Метрическая",
    "Only display when zooming out above this zoom.":
        "Показывать только при уменьшении масштаба выше этого значения.",
    "Only display when zooming in below this zoom.":
        "Показывать только при увеличении масштаба ниже этого значения.",
    "Reset": "Сбросить",
    "Default Tile Server Subdomains": "Поддомены тайл-сервера по умолчанию",
    "Available subdomains for this tile server concurrent requests.":
        "Доступные поддомены для параллельных запросов к тайл-серверу. Разделяются запятой, например: 'a,b,c'.",

    //modals/settings.ts
    "Marker Name": "Название маркера",
    "Marker name already exists.": "Маркер с таким именем уже существует.",
    "Marker name cannot be empty.": "Название маркера не может быть пустым.",
    "Font Awesome icon name (e.g. map-marker).":
        "Имя иконки Font Awesome (например, map-marker).",
    "Use Image for Icon": "Использовать изображение как иконку",
    "Layer Icon": "Иконка слоя",
    "The icon will be layered on the base icon.":
        "Иконка будет наложена поверх базовой иконки.",
    "Override default icon color.": "Переопределить цвет иконки по умолчанию.",
    Save: "Сохранить",
    "Marker type already exists.": "Тип маркера с таким именем уже существует.",
    "Invalid icon name.": "Недопустимое имя иконки.",
    "Icon cannot be empty.": "Иконка не может быть пустой.",
    Cancel: "Отмена",

    //modals/path.ts
    Type: "Введите",
    "to link heading": "для перехода к заголовку",
    "to link blocks": "для перехода к блокам",
    Note: "Примечание",
    "Blocks must have been created already":
        "Блоки должны быть созданы заранее",

    //modals/mapview.ts
    "There was an error parsing the JSON.":
        "Ошибка при разборе JSON.",

    //modals/context.ts
    "Description": "Описание",
    "Show Advanced Options": "Дополнительные параметры",
    "Execute Command": "Выполнить команду",
    "The marker will execute an Obsidian command on click":
        "Маркер выполнит команду Obsidian при нажатии",
    "Command to Execute": "Команда для выполнения",
    "Name of Obsidian Command to execute":
        "Имя команды Obsidian для выполнения",
    Command: "Команда",
    "Note to Open": "Открываемая заметка",
    "Path of note to open": "Путь к открываемой заметке",
    Path: "Путь",
    "Marker Type": "Тип маркера",
    Default: "По умолчанию",
    "Display Tooltip": "Показывать подсказку",
    "Min Zoom": "Минимальный масштаб",
    "Only display when zooming in below this zoom. Current map minimum":
        "Показывать только при увеличении ниже этого масштаба. Минимум карты",
    "Minimum zoom must be a number.": "Минимальный масштаб должен быть числом.",
    "Max Zoom": "Максимальный масштаб",
    "Only display when zooming out above this zoom. Current map maximum":
        "Показывать только при уменьшении выше этого масштаба. Максимум карты",
    "Maximum zoom must be a number.": "Максимальный масштаб должен быть числом.",
    "Associate Tags": "Связать теги",
    "Markers created from this tag using ": "Маркеры, созданные из этого тега с помощью ",
    " will use this marker icon by default.": " будут использовать эту иконку маркера по умолчанию.",
    "Delete Marker": "Удалить маркер",
    "Overlay Radius": "Радиус наложения",
    "Circle radius in": "Радиус круга в",
    "Radius must be greater than 0.": "Радиус должен быть больше 0.",
    "Overlay Description": "Описание наложения",
    "Overlay Color": "Цвет наложения",
    "Delete Overlay": "Удалить наложение",

    //modals/geojson.ts
    "File Name": "Имя файла",
    "Enter a file name.": "Введите имя файла.",

    //map/view.ts
    "Leaflet Map": "Карта Leaflet",

    //map/map.ts
    'Marker type "%1" does not exist, using default.':
        'Тип маркера «%1» не найден, используется тип по умолчанию.', //marker type
    "There was an error saving the overlay.":
        "Ошибка при сохранении наложения.",
    "There was an error adding GeoJSON to map":
        "Ошибка при добавлении GeoJSON на карту",
    "There was an error adding GPX to map":
        "Ошибка при добавлении GPX на карту",
    "Edit Overlay": "Изменить наложение",
    "Create Marker": "Создать маркер",
    "OpenStreetMap has restricted the use of its tile server in Obsidian. Your map may break at any time. Please switch to a different tile server.":
        "OpenStreetMap ограничил использование своего тайл-сервера в Obsidian. Карта может перестать работать. Пожалуйста, переключитесь на другой тайл-сервер.",
    "There was an issue parsing the tile layer: %1":
        "Ошибка при разборе тайлового слоя: %1",
    "OpenStreetMap cannot be turned off without specifying additional tile servers.":
        "OpenStreetMap нельзя отключить, не указав дополнительные тайл-серверы.",
    //layer/marker.ts
    "No command found!": "Команда не найдена!",
    "This marker cannot be edited because it was defined in the code block.":
        "Этот маркер нельзя изменить, так как он определён в блоке кода.",
    "This overlay cannot be edited because it was defined in the code block.":
        "Это наложение нельзя изменить, так как оно определено в блоке кода.",
    "Edit Marker": "Изменить маркер",
    "Convert to Code Block": "Преобразовать в блок кода",
    "Leaflet: Could not create icon for %1 - does this type exist in settings?":
        "Leaflet: не удалось создать иконку для «%1» — существует ли этот тип в настройках?",

    //layer/gpx.ts
    Lat: "Шир.",
    Lng: "Дол.",
    Time: "Время",
    Elevation: "Высота",
    Speed: "Скорость",
    Pace: "Темп",
    Temperature: "Температура",
    "Heart Rate": "Пульс",
    Cadence: "Каденс",
    spm: "шаг/мин",

    //controls/zoom.ts
    "Show All Markers": "Показать все маркеры",

    //controls/reset.ts
    "Reset View": "Сбросить вид",

    //controls/mapview.ts
    "Edit View Parameters": "Изменить параметры вида",
    "Save Parameters to View": "Сохранить параметры вида",

    //controls/gpx.ts
    "Distance": "Расстояние",
    "Zoom to %1 GPX Track%2": "Перейти к %1 GPX-трек%2", //number of tracks, plural
    Heatlines: "Тепловые линии",
    "Zoom to GPX": "Перейти к GPX",
    Deselect: "Снять выделение",

    //controls/filter.ts
    All: "Все",
    None: "Ни одного",
    "Filter Markers": "Фильтр маркеров",

    //control/edit.ts
    "Bulk Edit Markers": "Массовое редактирование маркеров",
    "Delete All": "Удалить все",
    marker: "маркер",
    markers: "маркеры",
    "Add New": "Добавить",
    "There was an issue with the provided latitude.":
        "Проблема с указанной широтой.",
    "There was an issue with the provided longitude.":
        "Проблема с указанной долготой.",
    //draw
    Draw: "Рисование",
    Polygon: "Многоугольник",
    Polyline: "Линия",
    Rectangle: "Прямоугольник",
    "Free Draw": "Свободное рисование",
    "Delete Shapes": "Удалить фигуры",
    Done: "Готово",
    Text: "Текст",
    Color: "Цвет",
    "Fill Color": "Заливка",
    "Move Shapes": "Переместить фигуры",
    "Export Drawing to GeoJSON": "Экспортировать рисунок в GeoJSON",
};
