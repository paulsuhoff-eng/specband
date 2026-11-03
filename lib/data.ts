import {
  Award,
  Briefcase,
  Building2,
  Cake,
  Flame,
  FileMusic,
  Handshake,
  Mic2,
  PartyPopper,
  SlidersHorizontal,
  Wrench,
  type LucideIcon,
} from "lucide-react";

export type ContactItem = {
  label: string;
  value: string;
  href?: string;
  compact?: boolean;
};

export const contactPhones: ContactItem[] = [
  {
    label: "звоните или пишите в любой мессенджер",
    value: "+7 (912) 633-84-86",
    href: "tel:+79126338486",
  },
];

export const contactMessengers: ContactItem[] = [
  {
    label: "Telegram",
    value: "t.me/specband",
    href: "https://t.me/specband",
  },
  {
    label: "Мессенджер MAX",
    value: "написать в МАХ",
    href: "https://max.ru/u/f9LHodD0cOJGckJIOaRLPFxxmNwuRUxkqqvLmjZbGVBot6IGqY1_7fu_hBM",
    compact: true,
  },
];

export const contactSocials: ContactItem[] = [
  {
    label: "Instagram",
    value: "@specband",
    href: "https://www.instagram.com/specband/",
  },
  {
    label: "ВКонтакте",
    value: "vk.com/specband",
    href: "https://vk.com/specband",
  },
];

export type GroupFact = {
  label: string;
  text: string;
};

export type EventType = {
  title: string;
  text: string;
  icon: LucideIcon;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
};

export type Advantage = {
  title: string;
  text: string;
  icon: LucideIcon;
};

export const groupAbout =
  "«Специи» — одна из лучших кавер-групп Екатеринбурга: это не просто " +
  "музыканты, а настоящая феерия звука, драйва и эмоций. За плечами " +
  "коллектива — несколько сотен ярких выступлений и тысячи улыбок.";

export type Frontman = {
  name: string;
  role: string;
  photo: string;
  text: string;
};

export const frontmen: Frontman[] = [
  {
    name: "Руслан Ибрагимов",
    role: "Вокал · фронтмен",
    photo: "/assets/frontmen/ruslan.jpg",
    text:
      "Мощнейший взрывной вокал и энергетика, которая держит зал с первой " +
      "ноты. Руслан ведёт концерт на драйве: задаёт темп, раскачивает " +
      "танцпол и заряжает даже самую сдержанную компанию. Сильный, " +
      "темпераментный и невероятно живой на сцене.",
  },
  {
    name: "Полина Гумерова",
    role: "Вокал · фронтвумен",
    photo: "/assets/frontmen/polina.jpg",
    text:
      "Нежный, мягкий тембр и загадочное обаяние обворожительной Полины. " +
      "Она привносит в звучание группы глубину и чувственность: проникновенные " +
      "баллады, воздушные переходы и интонации, которые цепляют с первых " +
      "секунд. Её манера исполнения — лёд, который зажигает рядом с огнём Руслана.",
  },
];

export const groupFacts: GroupFact[] = [
  { label: "О группе", text: groupAbout },
];

export const eventTypes: EventType[] = [
  {
    title: "Свадьбы",
    text: "Трогательный первый танец, заводной вечер и танцпол до утра.",
    icon: Cake,
    image: {
      src: "/assets/events/wedding.png",
      alt: "Выступление на свадьбе",
      width: 1920,
      height: 1280,
    },
  },
  {
    title: "Корпоративы",
    text: "Задаём атмосферу праздника и объединяем команду драйвом.",
    icon: Briefcase,
    image: {
      src: "/assets/events/corporate.jpeg",
      alt: "Выступление на корпоративе",
      width: 2624,
      height: 1744,
    },
  },
  {
    title: "Вечеринки",
    text: "Хиты под настроение любой компании — просто включите нас.",
    icon: PartyPopper,
    image: {
      src: "/assets/events/party.jpg",
      alt: "Выступление на вечеринке",
      width: 2048,
      height: 1366,
    },
  },
  {
    title: "Крупные выступления",
    text: "Масштабные концерты, фестивали и городские сцены — мощный живой звук для больших аудиторий.",
    icon: Mic2,
    image: {
      src: "/assets/events/big-show.jpg",
      alt: "Крупное выступление на сцене",
      width: 1920,
      height: 1280,
    },
  },
];

export const advantages: Advantage[] = [
  {
    title: "Опыт работы с крупными компаниями",
    text:
      "Выступали для десятков крупных компаний и организаций — от Лукойла и " +
      "Газпромнефти до банковского сектора (Альфа-Банк, Синара Банк) и местных " +
      "лидеров (УГМК, Сима-Ленд, СПК и других), поэтому знаем, как звучать " +
      "уверенно и достойно на корпоративных площадках любого уровня.",
    icon: Building2,
  },
  {
    title: "Опыт выступлений любого масштаба",
    text:
      "Играли от камерных свадеб и корпоративов до крупных фестивалей и " +
      "городских сцен — сотни концертов в самых разных форматах, и каждый " +
      "проходит с полной самоотдачей.",
    icon: Flame,
  },
  {
    title: "Гибкая программа под ваше событие",
    text:
      "Собираем сет под формат праздника: от трогательного первого танца до " +
      "плотного танцпола до утра, подстраиваясь под настроение и аудиторию.",
    icon: SlidersHorizontal,
  },
  {
    title: "Оборудование под ваш бюджет",
    text:
      "Организуем любой звук и свет под ваше событие: через налаженные связи с " +
      "проверенными и надёжными подрядчиками предоставим необходимое техническое " +
      "оборудование по конкурентной цене — под тот или иной бюджет.",
    icon: Wrench,
  },
  {
    title: "Финалисты Wedding Awards Ural 24/25",
    text: "Признание профессионального сообщества организаторов свадеб.",
    icon: Award,
  },
  {
    title: "Надёжность на площадке",
    text:
      "Опыт работы с ведущими, организаторами и техниками: быстро собираемся, " +
      "чётко держим тайминг и спокойно работаем в любых условиях.",
    icon: Handshake,
  },
];

export type RepertoireLink = {
  title: string;
  subtitle: string;
  href: string;
  icon: LucideIcon;
};

export const repertoireLinks: RepertoireLink[] = [
  {
    title: "Актуальный репертуар",
    subtitle: "Полный список песен в актуальной версии",
    href: "https://disk.yandex.ru/d/yExYfEjknPsQwQ?w=1",
    icon: FileMusic,
  },
  {
    title: "Райдеры",
    subtitle: "Технический и бытовой райдеры",
    href: "https://disk.yandex.ru/d/aU4ki957jXmsDQ",
    icon: SlidersHorizontal,
  },
];

export type GalleryPhoto = {
  src: string;
  alt: string;
  event: string;
  aspectRatio: number;
};

export type GalleryVideo = {
  title: string;
  event: string;
  embedUrl: string;
  cover: string;
  coverFallback?: string;
  vertical: boolean;
};

export const galleryPhotos: GalleryPhoto[] = [
  {
    src: "/assets/gallery/gallery-01.jpg",
    alt: "Выступление кавер-группы «Специи»",
    event: "Моменты",
    aspectRatio: 1634 / 1634,
  },
  {
    src: "/assets/gallery/gallery-02.jpg",
    alt: "Выступление кавер-группы «Специи»",
    event: "Моменты",
    aspectRatio: 2500 / 1667,
  },
  {
    src: "/assets/gallery/gallery-03.jpg",
    alt: "Выступление кавер-группы «Специи»",
    event: "Моменты",
    aspectRatio: 2560 / 1707,
  },
  {
    src: "/assets/gallery/gallery-04.jpg",
    alt: "Выступление кавер-группы «Специи»",
    event: "Моменты",
    aspectRatio: 2261 / 1696,
  },
  {
    src: "/assets/gallery/gallery-05.png",
    alt: "Выступление кавер-группы «Специи»",
    event: "Моменты",
    aspectRatio: 768 / 1365,
  },
  {
    src: "/assets/gallery/gallery-06.jpg",
    alt: "Выступление кавер-группы «Специи»",
    event: "Моменты",
    aspectRatio: 1988 / 1988,
  },
  {
    src: "/assets/gallery/gallery-07.png",
    alt: "Выступление кавер-группы «Специи»",
    event: "Моменты",
    aspectRatio: 1152 / 2048,
  },
  {
    src: "/assets/gallery/gallery-08.jpg",
    alt: "Выступление кавер-группы «Специи»",
    event: "Моменты",
    aspectRatio: 2500 / 1667,
  },
  {
    src: "/assets/gallery/gallery-09.jpg",
    alt: "Концерт кавер-группы «Специи»",
    event: "Моменты",
    aspectRatio: 5000 / 4558,
  },
];

export const galleryVideos: GalleryVideo[] = [
  {
    title: "Промо 2026 ч.1",
    event: "Промо",
    cover:
      "https://sun9-9.vkuserphoto.ru/impg/RKYsXIeCMCjbM7qSVQX4QcB1PCLfWIZ8JH-tig/mawxQBaygfk.jpg?size=1280x720&quality=95&sign=23b51cbbbd8067d4c9e251e8a26a7aa3&c_uniq_tag=iqQXduxkEIVa4wv5CJLixNLTcS4QbB8LZIKS8Eep3Gk&type=video_thumb",
    coverFallback: "/assets/gallery/video-cover-1.jpg",
    embedUrl:
      "https://vkvideo.ru/video_ext.php?oid=-106158274&id=456239226&hash=78d6dac7c251e730&hd=4&autoplay=1",
    vertical: false,
  },
  {
    title: "Промо 2026 ч.2",
    event: "Промо",
    cover:
      "https://sun9-77.vkuserphoto.ru/impg/XnhJGmRC-lM0TPzZ67_vU6Adq5aSggl_BgTx9A/Xt2jmBbJib8.jpg?size=1280x720&quality=95&sign=24df2e9248dcdc8acb4f028d753714f9&c_uniq_tag=KRYxWTlwY5ZGY3MBOeisoW7CRXAhXUB31sLs2hChC_0&type=video_thumb",
    coverFallback: "/assets/gallery/video-cover-2.jpg",
    embedUrl:
      "https://vkvideo.ru/video_ext.php?oid=-106158274&id=456239224&hash=004ae4612cf0ad72&hd=4&autoplay=1",
    vertical: false,
  },
  {
    title: "Промо 2023",
    event: "Промо",
    cover:
      "https://sun9-2.vkuserphoto.ru/mDzxPdC7sLXr5GdMHQSXxXcQJsukg6HTIWySgg/Z52vlqEMbp0.jpg",
    coverFallback: "/assets/gallery/video-cover-3.jpg",
    embedUrl:
      "https://vkvideo.ru/video_ext.php?oid=-106158274&id=456239086&hash=978e2624875b430b&hd=4&autoplay=1",
    vertical: false,
  },
  {
    title: "Промо 2026 ч.3",
    event: "Промо",
    cover:
      "https://sun9-80.vkuserphoto.ru/impg/o5fXB3m3M28v4viYFHmKYhSBP1PVmSmoeE2Ukg/y-Ab7W9Wmco.jpg?size=940x1672&quality=95&sign=62332067fd45a9fb4bf0655ca25fa16a&c_uniq_tag=dC0nU5OuBOsD22y6Rm0vkKUlk6WFEIxKG7XdrssRWPs&type=video_thumb",
    coverFallback: "/assets/gallery/video-cover-4.jpg",
    embedUrl:
      "https://vkvideo.ru/video_ext.php?oid=-106158274&id=456239231&hash=fa3a29ca2b891ec6&hd=4&autoplay=1",
    vertical: true,
  },
  {
    title: "Знакомство со Специями",
    event: "Промо",
    cover:
      "https://sun9-68.vkuserphoto.ru/impg/UVgopwcIZRmPO78PgUTIlLjoFLNxEJTn3x691A/quMUq4mJwms.jpg?size=1152x2048&quality=95&sign=f55b6f515180521cebe1cd1b1d8e5f57&c_uniq_tag=zqmBL_B1srIhneOgNnc9AiRACfB5nQYcR5FaX7C79Yk&type=video_thumb",
    coverFallback: "/assets/gallery/video-cover-5.jpg",
    embedUrl:
      "https://vkvideo.ru/video_ext.php?oid=-106158274&id=456239254&hash=78681bc083ac8328&hd=4&autoplay=1",
    vertical: true,
  },
  {
    title: "Свадебный драйв",
    event: "Промо",
    cover:
      "https://sun9-46.vkuserphoto.ru/impg/tuOwtAMOC89ut7BI9ZhWiJd10DRg71yfPxDbOw/zMKRNcmthv4.jpg?size=876x1558&quality=95&sign=76cc5ea3d85e9e7e3f10d0bf9c553e2b&c_uniq_tag=UnQFCWskV9uuAfIhjehfUgPpBtq18nGqtGVlyu3wWcM&type=video_thumb",
    coverFallback: "/assets/gallery/video-cover-6.jpg",
    embedUrl:
      "https://vkvideo.ru/video_ext.php?oid=-106158274&id=456239250&hash=9b330366021c259a&hd=4&autoplay=1",
    vertical: true,
  },
  {
    title: "Корпоративный лайв",
    event: "Лайв",
    cover:
      "https://sun9-8.vkuserphoto.ru/impg/GN0xI2NiGhfz64Hs6MqDAFbIpYIhOuVQ76nXfQ/N7m343t-H0c.jpg?size=1152x2048&quality=95&sign=6aae21eb6cd70548e8fee998b1fcf0cc&c_uniq_tag=KbT7C7RowJ_Y8Tiy6DUQiE3U1p1Xurs0DHameT1JMcY&type=video_thumb",
    coverFallback: "/assets/gallery/video-cover-7.jpg",
    embedUrl:
      "https://vkvideo.ru/video_ext.php?oid=-106158274&id=456239256&hash=0f9c729be138b379&hd=4&autoplay=1",
    vertical: true,
  },
];
