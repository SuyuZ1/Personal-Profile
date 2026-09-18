# Personal Profile

Multi-page research profile for SuyuZ1, hosted with GitHub Pages.

## Project structure

```text
Personal Profile/
├── index.html                  # Interactive entrance
├── material/                   # Public project videos and source material
├── pages/                      # Website pages
│   ├── home.html
│   ├── about.html
│   ├── education.html
│   ├── projects.html
│   └── research/
│       ├── index.html
│       ├── topic-01.html
│       ├── topic-02.html
│       ├── topic-03.html
│       ├── topic-04.html
│       └── topic-05.html
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
        ├── topic-02.md
        ├── topic-03.md
        ├── topic-04.md
        └── topic-05.md
```

## Adding new material

1. Add text to the matching Markdown template in `content/`.
2. Put original images, PDFs or videos in the matching `assets/uploads/` folder.
3. Put final Image2-generated visuals in the matching `assets/generated/` folder.
4. Update only the relevant page under `pages/`.

Use versioned, descriptive filenames and never commit API keys or private data.

## Content source hierarchy

Keep the three public-facing layers distinct:

1. The CV is the concise version and should remain exactly two full pages.
2. The interview deck is the expanded version, with additional project context, demos, technical
   details and supporting material. It does not need to be shortened for the website.
3. The website is the most complete public version. Future page updates should use the CV for verified
   high-level facts and the interview deck for richer evidence, visuals and demonstrations.

When new work is added, update the interview deck and its local source material first, then add the
appropriate public-facing detail to `pages/` and `content/`. Keep confidential or unapproved material
out of this public repository.
