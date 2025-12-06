# StellarcClient

Современный сайт для StellarcClient с красивым дизайном в стиле Debuda.

## 🎨 Особенности

- ✨ Современный дизайн с фиолетовой цветовой схемой
- 🎯 Двухколоночный макет (текст + 3D логотип)
- ⚡ Плавные анимации и эффекты
- 📱 Полностью адаптивный дизайн
- 🎭 Интерактивные элементы

## 📁 Структура проекта

```
Site/
├── index.html          # Главная страница
├── css/
│   └── styles.css      # Все стили
├── js/
│   └── script.js       # JavaScript функционал
├── .gitignore          # Игнорируемые файлы
├── .nojekyll           # Отключение Jekyll для GitHub Pages
└── README.md           # Этот файл
```

## 🚀 Как запустить локально

Просто откройте `index.html` в браузере.

## 📤 Как загрузить на GitHub Pages

### Способ 1: Через веб-интерфейс GitHub

1. Откройте ваш репозиторий: `https://github.com/ieiri2922-bit/StellarcClientBust.github.io`
2. Нажмите **"Add file"** → **"Upload files"**
3. Перетащите ВСЕ файлы и папки:
   - `index.html`
   - папку `css/` (со styles.css)
   - папку `js/` (со script.js)
   - `.gitignore`
   - `.nojekyll`
   - `README.md`
4. Нажмите **"Commit changes"**
5. Перейдите в **Settings** → **Pages**
6. Выберите **Source**: `main` branch, `/ (root)`
7. Сохраните
8. Подождите 1-2 минуты
9. Сайт будет доступен по адресу: `https://ieiri2922-bit.github.io/StellarcClientBust.github.io/`

### Способ 2: Через Git (если установлен)

```bash
git init
git add .
git commit -m "Добавлен сайт StellarcClient"
git branch -M main
git remote add origin https://github.com/ieiri2922-bit/StellarcClientBust.github.io.git
git push -u origin main
```

## ⚙️ Настройка GitHub Pages

После загрузки файлов:

1. Откройте **Settings** в репозитории
2. Перейдите в раздел **Pages** (слева)
3. В **Source** выберите:
   - Branch: `main`
   - Folder: `/ (root)`
4. Нажмите **Save**
5. Через 1-2 минуты сайт будет доступен

## 📝 Важные файлы

- **index.html** - главная страница (обязательно должен быть в корне!)
- **css/styles.css** - все стили
- **js/script.js** - JavaScript функционал
- **.nojekyll** - отключает обработку Jekyll (важно для GitHub Pages)
- **.gitignore** - исключает ненужные файлы из Git

## 🎯 Что нужно загрузить на GitHub

**Обязательно:**
- ✅ `index.html`
- ✅ папка `css/` с файлом `styles.css`
- ✅ папка `js/` с файлом `script.js`
- ✅ `.nojekyll` (пустой файл)
- ✅ `.gitignore`

**Опционально:**
- 📄 `README.md`

## 👤 Автор

By History_original

---

**Примечание:** Убедитесь, что `index.html` находится в корне репозитория, а не в подпапке!
