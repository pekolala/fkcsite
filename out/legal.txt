3:I[9275,[],""]
5:I[1343,[],""]
4:["slug","legal","d"]
6:Ta2c4,
        /* 画像に重ねるテキストのスタイル */
        .hero-text-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 10;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding: 20px;
            text-align: left;
            pointer-events: none;
        }

        .hero-top-left {
            max-width: 80%;
        }

        .hero-badge-small {
            display: inline-block;
            background: rgba(255, 255, 255, 0.9);
            color: var(--primary-color);
            padding: 4px 10px;
            font-size: 0.75rem;
            font-weight: 700;
            border-radius: 4px;
            margin-bottom: 8px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .hero-title-main {
            font-size: 1.35rem !important;
            /* 1行に収めるためわずかに縮小 (1.5rem -> 1.35rem) */
            color: var(--secondary-color) !important;
            line-height: 1.4 !important;
            background: rgba(255, 255, 255, 0.85);
            padding: 8px 12px !important;
            /* 余白を微調整 */
            border-radius: 8px;
            display: inline-block;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
            font-weight: 900 !important;
            margin-bottom: 12px !important;
            margin-top: 0 !important;
            border-left: 5px solid var(--primary-color);
            white-space: nowrap;
            /* 改行を禁止 */
        }

        .hero-title-main span {
            display: block;
            font-size: 0.95rem !important;
            font-weight: 700 !important;
            margin-bottom: 4px;
            color: var(--primary-color) !important;
            /* エリア情報を目立たせる */
        }

        .hero-sub-copy {
            font-size: 0.9rem;
            color: var(--secondary-color);
            /* 文字色をネイビーにしてコントラストを強める */
            font-weight: 800;
            /* さらに太く */
            line-height: 1.4;
            background: rgba(255, 255, 255, 0.85);
            /* 背景の白を濃く */
            padding: 6px 15px;
            display: inline-block;
            border-radius: 4px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
            /* ボックス自体に影をつけて浮かせる */
            text-shadow: none;
            margin-bottom: 10px;
            text-align: center;
        }

        .hero-bottom-center {
            width: 100%;
            display: flex;
            flex-direction: column;
            /* 縦に並べる */
            align-items: center;
            justify-content: center;
            padding-bottom: 15px;
            pointer-events: auto;
        }

        .hero-btn-overlay {
            background: var(--primary-color) !important;
            color: white !important;
            padding: 10px 24px !important;
            border-radius: 50px !important;
            font-weight: 900 !important;
            font-size: 1rem !important;
            box-shadow: 0 4px 15px rgba(245, 124, 0, 0.5);
            text-decoration: none !important;
            display: inline-block;
            pointer-events: auto;
        }

        /* 蛍のように光を放つアニメーションの一括適用 */
        .hero-btn-overlay,
        .cta-trial,
        .btn-ripple,
        .floating-cta-pc .btn-primary,
        #message a.btn-primary,
        #study-method a.btn-primary,
        #flow a.btn-primary,
        #contact a.btn-primary,
        .details-btn {
            animation: pulse-orange 2s infinite !important;
        }

        /* 電話番号ボタンなど（青系）のアニメーション */
        .cta-tel,
        .btn-secondary,
        .floating-cta-pc .btn-secondary {
            animation: pulse-blue 2s infinite !important;
        }

        @keyframes pulse-orange {
            0% {
                box-shadow: 0 0 0 0 rgba(245, 124, 0, 0.7);
            }

            70% {
                box-shadow: 0 0 0 15px rgba(245, 124, 0, 0);
            }

            100% {
                box-shadow: 0 0 0 0 rgba(245, 124, 0, 0);
            }
        }

        @keyframes pulse-blue {
            0% {
                box-shadow: 0 0 0 0 rgba(13, 71, 161, 0.7);
            }

            70% {
                box-shadow: 0 0 0 15px rgba(13, 71, 161, 0);
            }

            100% {
                box-shadow: 0 0 0 0 rgba(13, 71, 161, 0);
            }
        }

        @media (min-width: 768px) {
            .hero-text-overlay {
                padding: 40px;
            }

            .hero-badge-small {
                font-size: 1rem;
                padding: 6px 15px;
            }

            .hero-title-main {
                font-size: 2.8rem !important;
                padding: 15px 25px !important;
                /* PCでは少しゆったりさせる */
            }

            .hero-title-main span {
                font-size: 1.6rem !important;
            }

            .hero-sub-copy {
                font-size: 1.4rem;
                padding: 10px 20px;
                margin-bottom: 15px;
            }

            .hero-btn-overlay {
                font-size: 1.4rem !important;
                padding: 15px 40px !important;
            }
        }

        /* ==========================================================================
           Design Tokens
           ========================================================================== */
        :root {
            --primary-color: #F57C00;
            /* 温かみと活力を与えるアンバー（オレンジ系） */
            --secondary-color: #0D47A1;
            /* 信頼と知性を表すディープネイビー */
            --bg-color: #F9FAFB;
            --text-color: #333333;
            --white: #FFFFFF;
            --gray-light: #E0E0E0;
            --shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
            --radius: 8px;
            /* 少し丸みを強めて親しみやすさを */
            --container-max: 1100px;
            --line-height: 1.8;
            /* 行間を少し広げて読みやすく */
            --section-padding: 50px;
            /* セクション間の余白を調整 */
        }

        /* ==========================================================================
           Base Styles
           ========================================================================== */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Noto Sans JP', sans-serif;
            font-size: 16px;
            line-height: var(--line-height);
            color: var(--text-color);
            background-color: var(--bg-color);
            -webkit-font-smoothing: antialiased;
        }

        h1,
        h2,
        h3 {
            font-weight: 700;
            line-height: 1.3;
        }

        ul {
            list-style: none;
        }

        a {
            text-decoration: none;
            color: inherit;
            transition: opacity 0.3s ease;
        }

        a:hover {
            opacity: 0.8;
        }

        img {
            max-width: 100%;
            height: auto;
            display: block;
        }

        .container {
            width: 100%;
            max-width: var(--container-max);
            margin: 0 auto;
            padding: 0 10px;
            /* 20pxから10pxに縮小 (スマホ用) */
        }

        section {
            padding: var(--section-padding) 0;
            background-color: var(--white);
        }

        /* モバイルでは余白をさらに狭く */
        @media (max-width: 767px) {
            section {
                padding: 30px 0;
            }
        }

        section:nth-child(even) {
            background-color: var(--bg-color);
        }

        .btn {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 56px;
            border-radius: var(--radius);
            font-weight: 700;
            text-align: center;
            cursor: pointer;
            border: none;
            width: 100%;
            font-size: 1.1rem;
        }

        .btn-primary {
            background-color: var(--primary-color);
            color: var(--white);
            box-shadow: 0 4px 15px rgba(255, 87, 34, 0.3);
        }

        .btn-secondary {
            background-color: var(--secondary-color);
            color: var(--white);
            box-shadow: 0 4px 15px rgba(21, 101, 192, 0.3);
        }

        .btn-group {
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
        }

        .micro-copy {
            position: absolute;
            top: -16px;
            background-color: #FFC107;
            color: #222;
            font-size: 0.8rem;
            font-weight: 700;
            padding: 4px 12px;
            border-radius: 20px;
            box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
            z-index: 10;
            white-space: nowrap;
            letter-spacing: 0.05em;
        }

        .micro-copy::after {
            content: '';
            position: absolute;
            bottom: -5px;
            left: 50%;
            transform: translateX(-50%);
            border-width: 6px 5px 0;
            border-style: solid;
            border-color: #FFC107 transparent transparent transparent;
        }

        /* ==========================================================================
           Header & Nav
           ========================================================================== */
        header {
            background: var(--white);
            height: 60px;
            display: flex;
            align-items: center;
            position: sticky;
            top: 0;
            z-index: 100;
            box-shadow: var(--shadow);
        }

        .header-content {
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 100%;
            flex-wrap: nowrap;
            /* 折れ曲がりを防止 */
        }

        .header-contact {
            display: flex;
            align-items: center;
            gap: 8px;
            /* スマホ用に狭く調整 (15pxから) */
        }

        .header-tel {
            display: flex;
            align-items: center;
            font-weight: 700;
            color: var(--secondary-color);
            font-size: 1.05rem;
            /* サイズを大きく戻す (0.85remから) */
            gap: 2px;
            white-space: nowrap;
            letter-spacing: -0.05em;
            /* 文字間隔をさらに狭く */
        }

        .header-btn {
            display: none;
        }

        @media (min-width: 768px) {
            .header-contact {
                gap: 15px;
                /* デスクトップではゆとりを持たせる */
            }

            .header-tel {
                font-size: 1.1rem;
                gap: 6px;
            }

            .header-btn {
                display: block;
                background: var(--primary-color);
                color: var(--white);
                padding: 10px 20px;
                border-radius: 4px;
                font-weight: 700;
                font-size: 0.9rem;
            }
        }

        .logo {
            display: flex;
            align-items: center;
            height: 100%;
            text-decoration: none;
            gap: 2px;
            /* ロゴ画像と文字の間隔を限界まで狭く (6pxから) */
            min-width: 0;
        }

        .logo img {
            height: 40px;
            width: auto;
        }

        .logo-text {
            font-weight: 900;
            font-size: 1.15rem;
            /* サイズを大きく戻す (0.95remから) */
            color: var(--secondary-color);
            letter-spacing: -0.07em;
            /* 文字間隔を大幅に狭く */
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            /* 念の為、どうしても入り切らない場合は...にする */
        }

        @media (min-width: 768px) {
            .logo {
                gap: 10px;
            }

            .logo img {
                height: 50px;
            }

            .logo-text {
                font-size: 1.25rem;
            }
        }

        /* ==========================================================================
           Hero Section
           ========================================================================== */
        .hero {
            position: relative;
            background: linear-gradient(135deg, #fff5f2 0%, #e3f2fd 100%);
            color: var(--text-color);
            text-align: center;
            padding: 5px 0 80px;
            /* スマホ用に上部の余白を最小化 (20px -> 5px) */
            overflow: hidden;
        }

        .hero-flex {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 40px;
        }

        .hero-image {
            width: 100%;
            max-width: 500px;
            border-radius: 24px;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
            animation: float 6s ease-in-out infinite;
        }

        @keyframes float {

            0%,
            100% {
                transform: translateY(0);
            }

            50% {
                transform: translateY(-10px);
            }
        }

        .hero h1 {
            font-size: 1.75rem;
            margin-bottom: 16px;
            text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        }

        .hero-sub {
            font-size: 1rem;
            line-height: 1.6;
            margin-bottom: 32px;
            opacity: 0.95;
            padding: 0 10px;
        }

        .hero-cta {
            display: flex;
            flex-direction: column;
            gap: 12px;
        }

        .badge {
            display: inline-block;
            background: var(--primary-color);
            color: var(--white);
            padding: 4px 12px;
            border-radius: 20px;
            font-size: 0.85rem;
            font-weight: 700;
            margin-bottom: 16px;
        }

        /* ==========================================================================
           Hero Slideshow
           ========================================================================== */
        .hero-slideshow {
            position: relative;
            width: 100%;
            max-width: 600px;
            margin: 0 auto 32px auto;
            border-radius: 16px;
            box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
            overflow: hidden;
            display: flex;
        }

        .hero-slide {
            width: 100%;
            height: auto;
            border-radius: 16px;
        }

        .slide-overlay {
            position: absolute;
            top: 0;
            left: 0;
            opacity: 0;
            animation: heroFadePulse 8s infinite alternate;
        }

        @keyframes heroFadePulse {

            0%,
            35% {
                opacity: 0;
            }

            65%,
            100% {
                opacity: 1;
            }
        }

        /* ==========================================================================
           Service Area Section
           ========================================================================== */
        .area-box {
            background: #E8EAF6;
            border-radius: 12px;
            padding: 32px 24px;
            text-align: center;
        }

        .area-title {
            color: var(--secondary-color);
            margin-bottom: 24px;
            font-size: 1.25rem;
            font-weight: 700;
        }

        .area-tags {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 12px;
        }

        .area-tag {
            background: var(--white);
            color: var(--text-color);
            padding: 10px 24px;
            border-radius: 50px;
            font-weight: 700;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
            font-size: 0.95rem;
        }

        /* ==========================================================================
           Animations (ふわっと表示)
           ========================================================================== */
        .reveal {
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.8s ease-out;
        }

        .reveal.active {
            opacity: 1;
            transform: translateY(0);
        }

        /* 文字列の浮き上がり */
        .reveal-delay-1 {
            transition-delay: 0.2s;
        }

        .reveal-delay-2 {
            transition-delay: 0.4s;
        }

        .reveal-delay-3 {
            transition-delay: 0.6s;
        }

        /* ==========================================================================
           Typography & Layout
           ========================================================================== */
        .section-title {
            text-align: center;
            margin-bottom: 32px;
            font-size: 1.75rem;
            color: var(--secondary-color);
            position: relative;
            padding-bottom: 16px;
        }

        .section-title::after {
            content: "";
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            width: 80px;
            height: 4px;
            background-color: var(--primary-color);
            border-radius: 2px;
        }

        .section-subtitle {
            text-align: left;
            margin-top: -24px;
            margin-bottom: 32px;
            font-size: 1.125rem;
            color: #666;
            max-width: 700px;
            margin-left: auto;
            margin-right: auto;
        }

        /* 実績校バッジ */
        .achievement-schools {
            margin-top: 40px;
            padding: 30px;
            background: #fdf2e9;
            border-radius: var(--radius);
            border: 1px dashed var(--primary-color);
        }

        .school-list {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 12px;
            margin-top: 20px;
        }

        .school-badge {
            background: var(--white);
            color: var(--secondary-color);
            padding: 8px 16px;
            border-radius: 30px;
            font-size: 0.95rem;
            font-weight: 700;
            border: 1px solid #bbdefb;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
        }

        /* ==========================================================================
           Achievements Section
           ========================================================================== */
        .achievement-list {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 12px;
        }

        .achievement-item {
            background: var(--white);
            padding: 12px 20px;
            border-radius: 50px;
            border: 2px solid var(--secondary-color);
            color: var(--secondary-color);
            font-weight: 700;
            font-size: 0.9rem;
        }

        /* ==========================================================================
           Case Studies Section
           ========================================================================== */
        .case-grid {
            display: grid;
            gap: 24px;
        }

        /* ==========================================================================
           Teachers & Testimonials Section
           ========================================================================== */
        .teacher-grid,
        .testimonial-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 24px;
        }

        @media (min-width: 768px) {

            .teacher-grid,
            .testimonial-grid {
                grid-template-columns: repeat(2, 1fr);
            }
        }

        .teacher-card {
            background: var(--white);
            padding: 32px;
            border-radius: 12px;
            box-shadow: var(--shadow);
            text-align: center;
            display: flex;
            flex-direction: column;
            border-top: 4px solid var(--primary-color);
        }

        .teacher-icon,
        .teacher-image {
            width: 100px;
            height: 100px;
            border-radius: 50%;
            margin: 0 auto 16px;
            overflow: hidden;
            border: 3px solid #FFF3E0;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        .teacher-icon {
            font-size: 3rem;
            line-height: 100px;
            background: #FFF3E0;
        }

        .teacher-image img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .teacher-tag {
            display: inline-block;
            background: var(--secondary-color);
            color: var(--white);
            font-size: 0.8rem;
            padding: 2px 12px;
            border-radius: 20px;
            margin-bottom: 8px;
            align-self: center;
            font-weight: 700;
        }

        .teacher-name {
            font-size: 1.4rem;
            color: var(--secondary-color);
            margin-bottom: 16px;
            font-weight: 900;
        }

        .teacher-info {
            text-align: left;
            background: #f8f9fa;
            padding: 15px;
            border-radius: 8px;
            margin-bottom: 16px;
            font-size: 0.9rem;
        }

        .info-item {
            margin-bottom: 8px;
            line-height: 1.4;
        }

        .info-item:last-child {
            margin-bottom: 0;
        }

        .info-item strong {
            color: var(--secondary-color);
            display: inline-block;
            min-width: 80px;
        }

        .teacher-desc {
            font-size: 0.95rem;
            text-align: left;
            line-height: 1.6;
            color: #444;
            border-top: 1px dashed var(--gray-light);
            padding-top: 16px;
        }

        .testimonial-card {
            background: var(--white);
            padding: 32px;
            border-radius: 12px;
            box-shadow: var(--shadow);
            position: relative;
        }

        .testimonial-card::before {
            content: "“";
            position: absolute;
            top: 10px;
            left: 20px;
            font-size: 4rem;
            color: var(--gray-light);
            font-family: serif;
            line-height: 1;
        }

        .testimonial-rating {
            color: #FFC107;
            margin-bottom: 12px;
            font-size: 1.2rem;
            text-align: left;
            padding-left: 30px;
            position: relative;
            z-index: 1;
        }

        .testimonial-text {
            font-size: 1rem;
            line-height: 1.6;
            margin-bottom: 16px;
            position: relative;
            z-index: 1;
            font-weight: 500;
        }

        .testimonial-author {
            font-size: 0.9rem;
            color: #666;
            text-align: right;
            position: relative;
            z-index: 1;
        }

        .case-card {
            background: var(--white);
            padding: 16px 20px;
            /* 余白を削って高さを抑える */
            border-radius: 12px;
            box-shadow: var(--shadow);
            border-left: 6px solid var(--primary-color);
            display: flex;
            /* 横並び */
            align-items: flex-start;
            gap: 15px;
        }

        .case-content {
            flex: 1;
        }

        .case-title {
            font-weight: 700;
            font-size: 0.9rem;
            margin-bottom: 4px;
            color: var(--primary-color);
            line-height: 1.4;
        }

        .case-body {
            font-size: 1.1rem;
            font-weight: 700;
            color: var(--text-color);
            line-height: 1.5;
        }

        .case-highlight {
            display: inline-block;
            /* blockから変更して高さを詰めやすく */
            font-size: 1.25rem;
            font-weight: 900;
            color: var(--secondary-color);
            margin: 2px 0;
        }

        .case-author {
            font-size: 0.75rem;
            color: #777;
            text-align: right;
            margin-top: 5px;
            font-weight: normal;
        }

        .case-icon-bg {
            background: #fff5f2;
            width: 45px;
            height: 45px;
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
            color: var(--primary-color);
        }

        /* ==========================================================================
           Target Section
           ========================================================================== */
        .target-list {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 12px;
        }

        .target-item {
            background: var(--white);
            padding: 20px;
            border-radius: 12px;
            text-align: center;
            box-shadow: var(--shadow);
            font-weight: 700;
            transition: transform 0.3s ease;
            position: relative;
            overflow: hidden;
            color: var(--text-color);
        }

        .target-item-bg {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-size: cover;
            background-position: center;
            opacity: 1;
            transition: transform 0.4s ease;
            z-index: 0;
        }

        .target-item:hover .target-item-bg {
            transform: scale(1.05);
        }

        /* グラデーションのオーバーレイ */
        .target-overlay {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            height: 60%;
            background: linear-gradient(to top, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.8) 50%, rgba(255, 255, 255, 0) 100%);
            z-index: 1;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            align-items: center;
            padding-bottom: 20px;
        }

        .target-item>div:not(.target-item-bg):not(.target-overlay),
        .target-item>span,
        .target-item>a {
            position: relative;
            z-index: 2;
        }

        .target-item.with-bg {
            color: var(--text-color);
        }

        .target-item:hover {
            transform: translateY(-5px);
            box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
        }

        /* ターゲット項目のレイアウト変更用 */
        .target-header {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 12px;
            margin-bottom: 12px;
        }

        .target-name {
            font-size: 1.4rem;
            font-weight: 900;
            color: var(--secondary-color);
            text-shadow: 0 1px 2px rgba(255, 255, 255, 0.8);
        }

        .details-btn {
            display: inline-block;
            margin-top: 10px;
            font-size: 0.85rem;
            color: var(--secondary-color);
            text-decoration: underline;
            font-weight: 700;
            cursor: pointer;
            position: relative;
            z-index: 10;
            background: none;
            border: none;
            padding: 0;
        }

        .target-list .details-btn {
            background: var(--primary-color);
            color: var(--white);
            padding: 8px 24px;
            border-radius: 30px;
            font-size: 0.95rem;
            text-decoration: none;
            box-shadow: 0 4px 10px rgba(245, 124, 0, 0.2);
            transition: all 0.3s ease;
            margin-top: 0;
        }

        .target-list .details-btn:hover {
            background: #e65100;
            color: var(--white);
            transform: translateY(-2px);
            box-shadow: 0 6px 15px rgba(245, 124, 0, 0.3);
        }

        /* アコーディオン機能 */
        .accordion-content {
            max-height: 0;
            overflow: hidden;
            transition: all 0.5s ease-in-out;
            text-align: left;
            font-weight: 400;
            font-size: 1.15rem;
            /* さらに大きく調整 */
            line-height: 1.8;
            color: #333;
        }

        .details-btn-bottom {
            margin-top: 40px;
            text-align: center;
            border-top: 2px dashed var(--secondary-color);
            /* より目立たせる */
            padding-top: 30px;
            padding-bottom: 30px;
            /* 下に余白を確保 */
        }

        .target-item.active {
            grid-column: 1 / -1;
            /* 広がった時は横いっぱいに使う */
        }

        .target-item.active .accordion-content,
        .accordion-wrapper.active .accordion-content {
            max-height: 5000px;
            /* 超長文でも余裕を持って表示 */
            padding-top: 20px;
            margin-top: 15px;
            border-top: 1px dashed var(--gray-light);
            overflow: visible;
            /* クリッピング防止 */
        }

        .accordion-text-box {
            background-color: var(--bg-color);
            padding: 20px;
            border-radius: 8px;
        }

        .accordion-text-box h4 {
            color: var(--secondary-color);
            margin-top: 20px;
            margin-bottom: 10px;
            border-left: 4px solid var(--secondary-color);
            padding-left: 10px;
            font-size: 1rem;
        }

        .accordion-text-box h4:first-child {
            margin-top: 0;
        }

        .accordion-text-box ul {
            list-style: disc;
            margin-left: 20px;
            margin-bottom: 15px;
        }

        .accordion-text-box p {
            margin-bottom: 10px;
        }

        /* ==========================================================================
           Price Section
           ========================================================================== */
        .price-card {
            background: var(--white);
            padding: 32px;
            border-radius: 16px;
            box-shadow: var(--shadow);
            border: 2px solid var(--gray-light);
        }

        .price-note {
            margin-top: 16px;
            font-size: 1.1rem;
            color: var(--primary-color);
        }

        /* ==========================================================================
           Message Section
           ========================================================================== */
        .message-content {
            display: flex;
            flex-direction: column;
            gap: 24px;
            align-items: center;
        }

        .message-img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
        }

        .message-img-wrapper {
            width: 160px;
            height: 160px;
            border-radius: 50%;
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 6px solid var(--white);
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
        }

        /* ==========================================================================
           Flow Section (ご利用の流れ)
           ========================================================================== */
        .flow-container {
            max-width: 800px;
            margin: 0 auto;
        }

        .flow-step {
            display: flex;
            align-items: flex-start;
            margin-bottom: 24px;
            background: var(--white);
            padding: 24px;
            border-radius: 12px;
            box-shadow: var(--shadow);
            position: relative;
        }

        .flow-step:last-child {
            margin-bottom: 0;
        }

        .flow-number {
            flex-shrink: 0;
            width: 48px;
            height: 48px;
            background: var(--primary-color);
            color: var(--white);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.25rem;
            font-weight: 900;
            margin-right: 20px;
            box-shadow: 0 4px 10px rgba(245, 124, 0, 0.3);
        }

        .flow-content h3 {
            font-size: 1.2rem;
            color: var(--secondary-color);
            margin-bottom: 8px;
            margin-top: 4px;
        }

        .flow-content p {
            font-size: 0.95rem;
            color: #555;
            line-height: 1.6;
        }

        /* Vertical Line connecting steps */
        @media (min-width: 768px) {
            .flow-container {
                position: relative;
            }

            .flow-container::before {
                content: '';
                position: absolute;
                top: 24px;
                bottom: 24px;
                left: 48px;
                /* 24px (half number width) + padding if needed, adjusted visually */
                width: 2px;
                background: #E0E0E0;
                z-index: 0;
            }

            .flow-step {
                z-index: 1;
            }
        }

        .message-text {
            font-style: italic;
            position: relative;
            padding: 20px;
            background: #fff;
            border-radius: 12px;
        }

        .message-text::before {
            content: "“";
            font-size: 4rem;
            color: var(--secondary-color);
            position: absolute;
            top: -20px;
            left: 5px;
            opacity: 0.2;
        }

        /* ==========================================================================
           FAQ Section
           ========================================================================== */
        .faq-item {
            margin-bottom: 20px;
            border-bottom: 1px solid var(--gray-light);
            padding-bottom: 16px;
        }

        .faq-q {
            font-weight: 700;
            margin-bottom: 8px;
            display: flex;
            gap: 10px;
        }

        .faq-q::before {
            content: "Q";
            color: var(--primary-color);
        }

        .faq-a {
            display: flex;
            gap: 10px;
        }

        .faq-a::before {
            content: "A";
            color: var(--secondary-color);
            font-weight: 700;
        }

        /* ==========================================================================
           Mobile Fixed CTA
           ========================================================================== */
        .fixed-cta {
            position: fixed;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 64px;
            display: flex;
            z-index: 1000;
            box-shadow: 0 -4px 10px rgba(0, 0, 0, 0.1);
        }

        .fixed-cta .btn {
            height: 100%;
            border-radius: 0;
            font-size: 0.95rem;
        }

        .cta-tel {
            flex: 1;
            background: var(--secondary-color);
            color: white;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            line-height: 1.2;
        }

        .cta-tel small {
            font-size: 0.7rem;
            opacity: 0.8;
        }

        .cta-tel span {
            font-weight: 700;
            font-size: 0.9rem;
        }

        .cta-trial {
            flex: 1.5;
            background: var(--primary-color);
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            animation: pulse-orange 2s infinite;
        }

        /* ==========================================================================
           Desktop Floating CTA
           ========================================================================== */
        .floating-cta-pc {
            display: none;
            position: fixed;
            right: 30px;
            bottom: 30px;
            z-index: 1000;
            flex-direction: column;
            gap: 15px;
        }

        .floating-cta-pc .btn {
            width: 280px;
            border-radius: 30px;
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
        }

        /* ==========================================================================
           Responsive Styles
           ========================================================================== */
        @media (min-width: 768px) {
            .hero {
                text-align: left;
                padding: 100px 0;
            }

            .hero-flex {
                flex-direction: row;
                justify-content: space-between;
            }

            .hero-content {
                flex: 1;
            }

            .hero-image {
                flex: 1;
                max-width: 480px;
            }

            .hero h1 {
                font-size: 2.8rem;
            }

            .hero-sub {
                font-size: 1.25rem;
                padding: 0;
            }

            .hero-cta {
                flex-direction: row;
                justify-content: flex-start;
                gap: 20px;
            }

            .hero-cta .btn-group,
            .hero-cta .btn {
                width: auto;
            }

            .hero-cta .btn {
                padding: 0 40px;
            }

            .case-grid {
                grid-template-columns: repeat(3, 1fr);
            }

            .target-list {
                grid-template-columns: repeat(5, 1fr);
            }

            .message-content {
                flex-direction: row;
                text-align: left;
            }

            .message-img {
                width: 180px;
                height: 180px;
            }

            .section-title {
                font-size: 2.5rem;
                margin-bottom: 48px;
            }
        }

        @media (min-width: 1024px) {
            .fixed-cta {
                display: none;
            }

            .floating-cta-pc {
                display: flex;
            }

            section {
                padding: 80px 0;
            }

            .hero {
                padding: 120px 0 140px;
            }

            .container {
                padding: 0 20px;
            }
        }

        /* Prevent footer overlap with fixed CTA on mobile */
        footer {
            padding: 48px 0 112px;
            background: #222;
            color: #999;
            text-align: center;
            font-size: 0.8rem;
        }

        @media (min-width: 1024px) {
            footer {
                padding-bottom: 48px;
            }
        }
    0:["rnYu35JatzPt0wJqaTVhg",[[["",{"children":[["slug","legal","d"],{"children":["__PAGE__?{\"slug\":\"legal\"}",{}]}]},"$undefined","$undefined",true],["",{"children":[["slug","legal","d"],{"children":["__PAGE__",{},[["$L1","$L2"],null],null]},["$","$L3",null,{"parallelRouterKey":"children","segmentPath":["children","$4","children"],"error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L5",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":"$undefined","notFoundStyles":"$undefined","styles":null}],null]},[["$","html",null,{"lang":"ja","children":[["$","head",null,{"children":[["$","link",null,{"rel":"preconnect","href":"https://fonts.googleapis.com"}],["$","link",null,{"rel":"preconnect","href":"https://fonts.gstatic.com","crossOrigin":"anonymous"}],["$","link",null,{"href":"https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700;900&display=swap","rel":"stylesheet"}],["$","style",null,{"dangerouslySetInnerHTML":{"__html":"$6"}}],["$","style",null,{"dangerouslySetInnerHTML":{"__html":"\n          @media (max-width: 768px) {\n            .column-container {\n              padding-left: 15px !important;\n              padding-right: 15px !important;\n            }\n          }\n        "}}]]}],["$","body",null,{"children":["$","$L3",null,{"parallelRouterKey":"children","segmentPath":["children"],"error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L5",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":[["$","title",null,{"children":"404: This page could not be found."}],["$","div",null,{"style":{"fontFamily":"system-ui,\"Segoe UI\",Roboto,Helvetica,Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\"","height":"100vh","textAlign":"center","display":"flex","flexDirection":"column","alignItems":"center","justifyContent":"center"},"children":["$","div",null,{"children":[["$","style",null,{"dangerouslySetInnerHTML":{"__html":"body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}"}}],["$","h1",null,{"className":"next-error-h1","style":{"display":"inline-block","margin":"0 20px 0 0","padding":"0 23px 0 0","fontSize":24,"fontWeight":500,"verticalAlign":"top","lineHeight":"49px"},"children":"404"}],["$","div",null,{"style":{"display":"inline-block"},"children":["$","h2",null,{"style":{"fontSize":14,"fontWeight":400,"lineHeight":"49px","margin":0},"children":"This page could not be found."}]}]]}]}]],"notFoundStyles":[],"styles":null}]}]]}],null],null],[null,"$L7"]]]]
8:T1f20,
    <div class="container">
        <h1>法的表記・各種ポリシー</h1>

        <section id="privacy">
            <h2>プライバシーポリシー（個人情報保護方針）</h2>
            <p>フジタ家庭教師センター（以下「当センター」）は、利用者の個人情報を適切に取り扱い保護することを重要な責務と考えております。<br>
                当センターは、個人情報保護法および関連法令を遵守し、以下の方針に基づき個人情報の適切な管理・保護に努めます。</p>

            <h3>個人情報の取得</h3>
            <p>当センターでは、以下の場合に利用者の個人情報をご提供いただくことがあります。</p>
            <ul>
                <li>お問い合わせ</li>
                <li>体験授業のお申し込み</li>
                <li>家庭教師サービスのお申し込み</li>
                <li>資料請求</li>
                <li>電話やメールでのご相談</li>
            </ul>
            <p>取得する情報には以下が含まれる場合があります。</p>
            <ul>
                <li>氏名</li>
                <li>住所</li>
                <li>電話番号</li>
                <li>メールアドレス</li>
                <li>生徒の学年</li>
                <li>学習状況やご相談内容</li>
                <li>その他サービス提供に必要な情報</li>
            </ul>

            <h3>個人情報の利用目的</h3>
            <p>取得した個人情報は以下の目的の範囲内で利用いたします。</p>
            <ul>
                <li>お問い合わせへの回答</li>
                <li>体験授業および家庭教師サービスの提供</li>
                <li>授業日程などの連絡</li>
                <li>資料送付</li>
                <li>サービス向上のための分析</li>
                <li>重要なお知らせの連絡</li>
            </ul>

            <h3>個人情報の第三者提供</h3>
            <p>当センターは、取得した個人情報を第三者へ提供することはありません。<br>
                ただし、以下の場合を除きます。</p>
            <ul>
                <li>ご本人の同意がある場合</li>
                <li>法令に基づく場合</li>
                <li>警察や裁判所などの公的機関から要請があった場合</li>
            </ul>

            <h3>個人情報の管理</h3>
            <p>当センターは、個人情報の漏洩、紛失、改ざん、不正アクセスを防止するため、適切な安全管理措置を講じます。</p>

            <h3>個人情報の開示・訂正・削除</h3>
            <p>利用者ご本人から個人情報の開示、訂正、削除のご希望があった場合は、ご本人確認のうえ適切に対応いたします。</p>
        </section>

        <section id="tokushoho">
            <h2>特定商取引法に基づく表記</h2>
            <h3>事業者名</h3>
            <p>フジタ家庭教師センター</p>

            <h3>運営責任者</h3>
            <p>藤田 真弓</p>

            <h3>所在地</h3>
            <p>新潟県燕市新生町１０２</p>

            <h3>電話番号</h3>
            <p>0256－63－5292</p>

            <h3>メールアドレス</h3>
            <p>fujita.kc@gmail.com</p>

            <h3>サービス内容</h3>
            <p>家庭教師による学習指導サービス</p>

            <h3>料金</h3>
            <p>料金は学年・指導内容・授業回数等により異なります。<br>
                詳細はお問い合わせまたは体験授業の際にご案内いたします。</p>

            <h3>支払い方法</h3>
            <p>銀行振込または現金払い</p>

            <h3>支払い時期</h3>
            <p>授業開始前または月ごとのお支払いとなります。</p>

            <h3>キャンセル</h3>
            <p>授業開始前のキャンセルについては対応いたします。<br>
                授業実施後の返金は原則として対応しておりません。</p>
        </section>

        <section id="terms">
            <h2>利用規約</h2>
            <p>本利用規約は、フジタ家庭教師センターが提供する家庭教師サービスの利用条件を定めるものです。</p>

            <h3>サービス内容</h3>
            <p>当センターは、生徒の学習支援を目的とした家庭教師による学習指導サービスを提供します。</p>

            <h3>申し込み</h3>
            <p>利用者は当センターの定める方法によりサービスを申し込むものとします。</p>

            <h3>料金</h3>
            <p>料金は学年、指導内容、授業回数等により決定されます。</p>

            <h3>支払い</h3>
            <p>利用者は当センターの指定する方法により料金を支払うものとします。</p>

            <h3>キャンセル</h3>
            <p>授業のキャンセルまたは日程変更は事前にご連絡ください。<br>
                無断キャンセルの場合は料金が発生する場合があります。</p>

            <h3>禁止事項</h3>
            <p>利用者は以下の行為を行ってはなりません。</p>
            <ul>
                <li>虚偽の情報の提供</li>
                <li>講師への迷惑行為</li>
                <li>サービス運営を妨害する行為</li>
            </ul>

            <h3>規約変更</h3>
            <p>当センターは必要に応じて本規約を変更することがあります。</p>
        </section>

        <section id="disclaimer">
            <h2>免責事項</h2>
            <p>当サイトに掲載されている情報は、可能な限り正確な情報を掲載するよう努めておりますが、その内容の正確性や安全性を保証するものではありません。</p>
            <p>当サイトの利用により生じた損害等について、当センターは一切の責任を負いかねます。</p>
            <p>また、家庭教師サービスは学習支援を目的とするものであり、成績向上や合格を保証するものではありません。</p>
            <p>当サイトからリンクやバナー等により他サイトへ移動された場合、移動先サイトで提供される情報やサービスについて当センターは責任を負いません。</p>
        </section>

        <section id="policy">
            <h2>サイトポリシー</h2>
            <h3>著作権</h3>
            <p>当サイトに掲載されている文章、画像、デザイン等の著作権はフジタ家庭教師センターまたは正当な権利を有する第三者に帰属します。<br>
                無断転載、複製、転用を禁止します。</p>

            <h3>リンク</h3>
            <p>当サイトへのリンクは原則自由です。<br>
                ただし、公序良俗に反するサイトからのリンクはお断りする場合があります。</p>
        </section>

        <div class="back-link">
            <a href="index.html">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="19" y1="12" x2="5" y2="12"></line>
                    <polyline points="12 19 5 12 12 5"></polyline>
                </svg>
                トップページへ戻る
            </a>
        </div>
    </div>
2:["$","main",null,{"className":"column-container","dangerouslySetInnerHTML":{"__html":"$8"}}]
7:[["$","meta","0",{"name":"viewport","content":"width=device-width, initial-scale=1"}],["$","meta","1",{"charSet":"utf-8"}],["$","title","2",{"children":"法的表記・各種ポリシー | フジタ家庭教師センター | フジタ家庭教師センター"}],["$","meta","3",{"name":"description","content":"三条・燕・加茂エリア専門のプロ家庭教師。志望校合格と成績アップを全力サポート。"}],["$","link","4",{"rel":"canonical","href":"https://fujita-kc.com/legal"}],["$","meta","5",{"property":"og:title","content":"法的表記・各種ポリシー | フジタ家庭教師センター | フジタ家庭教師センター"}],["$","meta","6",{"property":"og:description","content":"三条・燕・加茂エリア専門のプロ家庭教師。志望校合格と成績アップを全力サポート。"}],["$","meta","7",{"property":"og:url","content":"https://fujita-kc.com/legal"}],["$","meta","8",{"property":"og:site_name","content":"フジタ家庭教師センター"}],["$","meta","9",{"property":"og:locale","content":"ja_JP"}],["$","meta","10",{"property":"og:image","content":"https://fujita-kc.com/logo.png"}],["$","meta","11",{"property":"og:image:width","content":"1200"}],["$","meta","12",{"property":"og:image:height","content":"630"}],["$","meta","13",{"property":"og:type","content":"article"}],["$","meta","14",{"name":"twitter:card","content":"summary_large_image"}],["$","meta","15",{"name":"twitter:title","content":"法的表記・各種ポリシー | フジタ家庭教師センター | フジタ家庭教師センター"}],["$","meta","16",{"name":"twitter:description","content":"三条・燕・加茂エリア専門のプロ家庭教師。志望校合格と成績アップを全力サポート。"}],["$","meta","17",{"name":"twitter:image","content":"https://fujita-kc.com/logo.png"}]]
1:null
