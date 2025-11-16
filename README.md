# 🌟 Pokémon Search App

A cute little React app where you can search for any Pokémon and instantly get its **image + stats** using PokéAPI!  
Perfect for beginners learning API fetch, useState, useEffect & React basics. 💛⚡

<p align="center">
  <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png" width="120" />
  <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" width="120" />
  <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png" width="120" />
</p>

---

## ✨ Features

- 🔍 **Search any Pokémon by name**
- 📸 Shows **official sprite image**
- 📊 Displays **base stats** (HP, Attack, Speed, etc.)
- 🚀 Fast API fetch with loading & error handling
- 🎯 Smooth UI with TailwindCSS
- 🎒 Beginner-friendly code structure

---

## 🧩 How It Works

1. User types a Pokémon name  
2. App sends a request to: https://pokeapi.co/api/v2/pokemon/{name}
3. API returns:
   - stats  
   - sprites  
   - name  
4. App displays everything neatly 💛

---

## 🚀 Getting Started

### Clone the repo
```bash
git clone https://github.com/HyperWoo/pokemon-search.git
cd pokemon-search

Install dependencies
npm install

Run the dev server
npm run dev

```

---

## 🎨 UI Preview
<p align="center"> <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png" width="140" /> <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png" width="140" /> <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/143.png" width="180" /> </p>

---

## 🛠 Tech Stack

- ⚛️ React (Vite)
- 🎨 TailwindCSS
- 🌐 PokéAPI
- ❤️ Pure love for Pokémon

---

## 🐣 Example Pokémon Stats

{
  "name": "pikachu",
  "stats": [
    { "hp": 35 },
    { "attack": 55 },
    { "defense": 40 },
    { "speed": 90 }
  ]
}

## 💡 Future Ideas

- ⭐ Add Pokémon type badges
- ⭐ Display evolution chain
- ⭐ Show abilities (static / hidden)
- ⭐ Add “Random Pokémon” button
- ⭐ Show official artwork
- ⭐ Dark mode 🌙

## 🐱‍👤 Credits

API: https://pokeapi.co

Sprites from Pokémon © Nintendo / Game Freak

Built with ❤️ by HyperWoo