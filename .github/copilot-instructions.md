# Copilot Instructions for AI Agents

## Архитектура проекта
- Проект построен на React с использованием Vite (см. `vite.config.js`).
- Основные компоненты расположены в `src/components/layout/` (AppHeader, AppSider, AppContent, AppLayout).
- Контекст приложения реализован через `src/context/crypto-context.jsx`.
- API-интеграции и утилиты — в `src/api.js` и `src/utils.js`.
- Статические ресурсы — в `public/`.

## Важные рабочие процессы
- Установка зависимостей: `npm i`
- Запуск проекта: `npm run dev`
- Установка Ant Design: `npm install antd --save` (используется для UI-компонентов)

## Конвенции и паттерны
- Используйте функциональные компоненты и хуки React.
- Стили — через `src/index.css`.
- Все основные layout-компоненты импортируются и используются в `src/App.jsx`.
- Для управления состоянием используйте контекст из `src/context/crypto-context.jsx`.
- API-запросы централизованы в `src/api.js`.

## Интеграции и зависимости
- UI: Ant Design (`antd`)
- Сборка и запуск: Vite

## Примеры паттернов
- Layout-компоненты:
  ```jsx
  import AppHeader from './components/layout/AppHeader';
  import AppSider from './components/layout/AppSider';
  // ...
  ```
- Использование контекста:
  ```jsx
  import { CryptoContext } from './context/crypto-context';
  ```
- API-запросы:
  ```js
  import { fetchData } from './api';
  ```

## Рекомендации для AI-агентов
- Следуйте существующей структуре папок и компонент.
- Не добавляйте новые глобальные стили — используйте `index.css`.
- Для новых UI-элементов используйте компоненты Ant Design.
- Все новые функции должны быть интегрированы через существующие точки расширения (layout, context, api).

---
Пожалуйста, уточните, если какие-либо разделы требуют доработки или есть неочевидные паттерны, которые нужно описать подробнее.