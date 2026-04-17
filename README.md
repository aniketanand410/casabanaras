# 🪔 Casa Banaras

A vibrant, traditional landing page for **Casa Banaras** — a homestay in the heart of Varanasi, 500m from Kashi Vishwanath Mandir.

## 🌟 Features

- Fully responsive single-page design
- Traditional Varanasi color palette (saffron, marigold, terracotta, ink)
- Animated hero with ghat silhouette, floating diyas, and temple spires
- Custom SVG illustrations for every attraction (no licensing worries)
- Rotating mandala, flickering diya, sunset marquee
- Sections: Hero · About · Gallery · Amenities · Nearby Attractions · Reviews · Contact
- Scroll-triggered reveal animations
- Sticky CTA button to book on Airbnb

## 📁 File Structure

```
casa-banaras/
├── index.html         # Main page
├── styles.css         # All styling
├── script.js          # Scroll reveal + interactions
├── images/            # Enhanced room photos
│   ├── bedroom-1.jpg
│   ├── bedroom-2.jpg
│   ├── bedroom-3.jpg
│   ├── living-room.jpg
│   ├── lounge.jpg
│   └── dining.jpg
└── README.md
```

## 🚀 How to Host on GitHub Pages

### Option 1: Using the GitHub Website (easiest)

1. **Create a new repo on GitHub**
   - Go to https://github.com/new
   - Name it `casa-banaras` (or whatever you like)
   - Make it **Public**
   - Click "Create repository"

2. **Upload the files**
   - Click "uploading an existing file"
   - Drag ALL the files (`index.html`, `styles.css`, `script.js`, `README.md`) AND the `images` folder into the upload area
   - Commit the changes

3. **Enable GitHub Pages**
   - Go to **Settings** → **Pages** (in the left sidebar)
   - Under "Source", select **Deploy from a branch**
   - Branch: `main` · Folder: `/ (root)`
   - Click **Save**

4. **Visit your site**
   - Within 1–2 minutes, your site will be live at:
   - `https://<your-github-username>.github.io/casa-banaras/`

### Option 2: Using Git command line

```bash
# In the casa-banaras folder
git init
git add .
git commit -m "Initial commit: Casa Banaras website"
git branch -M main
git remote add origin https://github.com/<your-username>/casa-banaras.git
git push -u origin main
```

Then follow step 3 above to enable Pages.

### Option 3: Custom domain (optional)

If you buy a domain like `casabanaras.com`:
1. In repo Settings → Pages → add your custom domain
2. At your domain registrar, add these DNS records:
   - `A` record → `185.199.108.153` (and 109, 110, 111)
   - Or `CNAME` → `<your-username>.github.io`
3. Enable "Enforce HTTPS" in Pages settings

## ✏️ How to Edit

- **Update contact info**: Edit phone/email/Instagram links in `index.html` (search for "contact" section)
- **Change reviews**: Replace the four `<blockquote class="review">` blocks in `index.html`
- **Add more images**: Drop them into `/images/`, then add another `<figure class="g-item">` in the gallery section
- **Tweak colors**: All colors live in CSS variables at the top of `styles.css` (look for `:root`)

## 🎨 Color Palette

- `--saffron: #ea580c` — primary accent
- `--marigold: #fbbf24` — secondary/gold highlights
- `--terracotta: #9a3412` — deep warm tone
- `--ink: #1c0a00` — body/text
- `--cream: #fef7ed` — background

## 📞 Contact

- **Phone/WhatsApp**: +91 83404 33789
- **Email**: Casabanaras@gmail.com
- **Instagram**: [@casabanaras](https://instagram.com/casabanaras)
- **Airbnb**: [Book here](https://www.airbnb.com/rooms/1541820174478965437)

---

हर हर महादेव · Har Har Mahadev · Made with 🧡 in Kashi
