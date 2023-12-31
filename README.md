https://github.com/NikSerdu/hackathon-go-algo/assets/125663119/165336b1-6991-4388-92ad-7e5aed88a889

# Установка

## Frontend

```
npm i
npm run dev
```

## Algorithm

1. **Установка зависимостей:**

   - Убадитесь, что все необходимые зависимости установлены. Выполните:
     ```bash
     pip install -r requirements.txt
     ```

2. **Запуск алгоритма:**

   - Запускать алгоритм с помощью Jupyter Notebook

3. **Кастомизация:**
   - С помощью корректировки периодов EMA можно добиться лучшего результата для конкретной бумаги.

# Trading Algorithm README

## MACD алгоритм следования за трендом

### Обзор

MACD — популярный индикатор импульса, который помогает трейдерам определить потенциальные развороты тренда, силу импульса и общее направление цены актива. Представленный здесь алгоритм использует индикатор MACD для генерации торговых сигналов и принятия решений о покупке/продаже.

### Компоненты

1. **Расчет MACD:**

   - MACD рассчитывается путем вычитания 26-периодной экспоненциальной скользящей средней (EMA) из 12-периодной EMA. Затем результат сглаживается с помощью 9-периодной EMA, в результате чего образуется линия MACD.

2. **Сигнальная линия:**

   - Сигнальная линия создается путем взятия 9-периодной EMA линии MACD. Пересечение линии MACD выше или ниже сигнальной линии генерирует потенциальные сигналы на покупку или продажу.

3. **Сигналы:**
   - **Покупка:** Производится, когда MACD-линия пересекает сигнальную линию и растет.
   - **Продажа:** При достижении пика и последующем снижении MACD-линией.

![Схема работы](/graph.png)

---
