# Personal Profile

Multi-page research profile for SuyuZ1, hosted with GitHub Pages.

## Project structure

```text
Personal Profile/
├── index.html                  # Interactive entrance
├── pages/                      # Website pages
│   ├── home.html
│   ├── about.html
│   ├── education.html
│   ├── projects.html
│   └── research/
│       ├── index.html
│       ├── topic-01.html
│       └── topic-02.html
├── assets/
│   ├── css/                    # Shared styles
│   ├── js/                     # Shared interactions
│   ├── icons/                  # Favicon and interface icons
│   ├── uploads/                # Original materials supplied by the owner
│   └── generated/              # Final AI-generated website images
└── content/                    # Editable text templates
    ├── profile.md
    ├── education.md
    ├── projects.md
    └── research/
        ├── topic-01.md
        └── topic-02.md
```

## Adding new material

1. Add text to the matching Markdown template in `content/`.
2. Put original images, PDFs or videos in the matching `assets/uploads/` folder.
3. Put final Image2-generated visuals in the matching `assets/generated/` folder.
4. Update only the relevant page under `pages/`.

Use versioned, descriptive filenames and never commit API keys or private data.
