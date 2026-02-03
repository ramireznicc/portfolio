import { motion } from 'framer-motion'
import { useState } from 'react'

const projects = [
  {
    title: 'Sooma Works',
    description: 'Sitio web corporativo con diseño moderno y responsive para mostrar servicios y portafolio de trabajos.',
    tags: ['React', 'Web Design', 'UI/UX'],
    github: 'https://github.com/ramireznicc/sooma',
    demo: 'https://soomaworks.com/',
    image: '/sooma.png',
  },
  {
    title: 'Simpsons for Fun',
    description: 'Aplicación interactiva temática de Los Simpsons con contenido divertido y animaciones.',
    tags: ['JavaScript', 'API', 'CSS'],
    github: 'https://github.com/ramireznicc/simpsons-for-fun',
    demo: 'https://simpsons-for-fun.netlify.app/',
    image: '/simpsons.png',
  },
  {
    title: 'System Monitor',
    description: 'Herramienta de monitoreo de sistema para visualizar métricas de rendimiento en tiempo real.',
    tags: ['Python', 'Linux', 'CLI'],
    github: 'https://github.com/ramireznicc/monitor',
    image: '/system-monitor.png',
  },
  {
    title: 'Get Growing',
    description: 'E-commerce completo para productos de jardinería con carrito de compras y pasarela de pagos.',
    tags: ['React', 'E-commerce', 'Node.js'],
    github: 'https://github.com/ramireznicc/get-growing',
    demo: 'https://get-growing.netlify.app/',
    image: '/get-growing.png',
  },
  {
    title: 'Pokedex',
    description: 'Enciclopedia interactiva de Pokémon consumiendo la PokeAPI con búsqueda y filtros.',
    tags: ['React', 'API', 'CSS'],
    github: 'https://github.com/ramireznicc/pokedex',
    demo: 'https://pokedex-x23.netlify.app/',
    image: '/pokedex.png',
  },
  {
    title: 'Taldea',
    description: 'Plataforma e-commerce con catálogo de productos, gestión de inventario y checkout.',
    tags: ['React', 'E-commerce', 'Firebase'],
    github: 'https://github.com/ramireznicc/taldea',
    demo: 'https://taldea.netlify.app/',
    image: '/taldea.png',
  },
  {
    title: 'The Typing Game',
    description: 'Juego para practicar mecanografía con diferentes niveles de dificultad y estadísticas.',
    tags: ['JavaScript', 'Game', 'CSS'],
    github: 'https://github.com/ramireznicc/typing-game',
    demo: 'https://the-typing-game.netlify.app/',
    image: '/typing-game.png',
  },
]

const skills = [
  { name: 'React', icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"/></svg> },
  { name: 'Python', icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z"/></svg> },
  { name: 'Linux', icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12.504 0c-.155 0-.315.008-.48.021-4.226.333-3.105 4.807-3.17 6.298-.076 1.092-.3 1.953-1.05 3.02-.885 1.051-2.127 2.75-2.716 4.521-.278.832-.41 1.684-.287 2.489a.424.424 0 00-.11.135c-.26.268-.45.6-.663.839-.199.199-.485.267-.797.4-.313.136-.658.269-.864.68-.09.189-.136.394-.132.602 0 .199.027.4.055.536.058.399.116.728.04.97-.249.68-.28 1.145-.106 1.484.174.334.535.47.94.601.81.2 1.91.135 2.774.6.926.466 1.866.67 2.616.47.526-.116.97-.464 1.208-.946.587-.003 1.23-.269 2.26-.334.699-.058 1.574.267 2.577.2.025.134.063.198.114.333l.003.003c.391.778 1.113 1.132 1.884 1.071.771-.06 1.592-.536 2.257-1.306.631-.765 1.683-1.084 2.378-1.503.348-.199.629-.469.649-.853.023-.4-.2-.811-.714-1.376v-.097l-.003-.003c-.17-.2-.25-.535-.338-.926-.085-.401-.182-.786-.492-1.046h-.003c-.059-.054-.123-.067-.188-.135a.357.357 0 00-.19-.064c.431-1.278.264-2.55-.173-3.694-.533-1.41-1.465-2.638-2.175-3.483-.796-1.005-1.576-1.957-1.56-3.368.026-2.152.236-6.133-3.544-6.139zm.529 3.405h.013c.213 0 .396.062.584.198.19.135.33.332.438.533.105.259.158.459.166.724 0-.02.006-.04.006-.06v.105a.086.086 0 01-.004-.021l-.004-.024a1.807 1.807 0 01-.15.706.953.953 0 01-.213.335.71.71 0 00-.088-.042c-.104-.045-.198-.064-.284-.133a1.312 1.312 0 00-.22-.066c.05-.06.146-.133.183-.198.053-.128.082-.264.088-.402v-.02a1.21 1.21 0 00-.061-.4c-.045-.134-.101-.2-.183-.333-.084-.066-.167-.132-.267-.132h-.016c-.093 0-.176.03-.262.132a.8.8 0 00-.205.334 1.18 1.18 0 00-.09.4v.019c.002.089.008.179.02.267-.193-.067-.438-.135-.607-.202a1.635 1.635 0 01-.018-.2v-.02a1.772 1.772 0 01.15-.768c.082-.22.232-.406.43-.533a.985.985 0 01.594-.2zm-2.962.059h.036c.142 0 .27.048.399.135.146.129.264.288.344.465.09.199.14.4.153.667v.004c.007.134.006.2-.002.266v.08c-.03.007-.056.018-.083.024-.152.055-.274.135-.393.2.012-.09.013-.18.003-.267v-.015c-.012-.133-.04-.2-.082-.333a.613.613 0 00-.166-.267.248.248 0 00-.183-.064h-.021c-.071.006-.13.04-.186.132a.552.552 0 00-.12.27.944.944 0 00-.023.33v.015c.012.135.037.2.08.334.046.134.098.2.166.268.01.009.02.018.034.024-.07.057-.117.07-.176.136a.304.304 0 01-.131.068 2.62 2.62 0 01-.275-.402 1.772 1.772 0 01-.155-.667 1.759 1.759 0 01.08-.668 1.43 1.43 0 01.283-.535c.128-.133.26-.2.418-.2zm1.37 1.706c.332 0 .733.065 1.216.399.293.2.523.269 1.052.468h.003c.255.136.405.266.478.399v-.131a.571.571 0 01.016.47c-.123.31-.516.643-1.063.842v.002c-.268.135-.501.333-.775.465-.276.135-.588.292-1.012.267a1.139 1.139 0 01-.448-.067 3.566 3.566 0 01-.322-.198c-.195-.135-.363-.332-.612-.465v-.005h-.005c-.4-.246-.616-.512-.686-.71-.07-.268-.005-.47.193-.6.224-.135.38-.271.483-.336.104-.074.143-.102.176-.131h.002v-.003c.169-.202.436-.47.839-.601.139-.036.294-.065.466-.065zm2.8 2.142c.358 1.417 1.196 3.475 1.735 4.473.286.534.855 1.659 1.102 3.024.156-.005.33.018.513.064.646-1.671-.546-3.467-1.089-3.966-.22-.2-.232-.335-.123-.335.59.534 1.365 1.572 1.646 2.757.13.535.16 1.104.021 1.67.067.028.135.06.205.067 1.032.534 1.413.938 1.23 1.537v-.002c-.06-.135-.12-.2-.184-.264-.192-.135-.393-.2-.64-.136-.246.064-.536.264-.807.399-.68.332-1.388.465-1.94.402-.554-.064-.89-.267-1.057-.533a.456.456 0 01-.06-.2l-.001-.004-.001-.002v-.011c.057-.135.117-.2.182-.264a.457.457 0 01.349-.067c.402.004.806-.066 1.09-.267.284-.2.47-.532.53-.869a2.07 2.07 0 00-.053-.87c-.057-.2-.127-.336-.2-.468-.128-.266-.26-.467-.336-.665-.08-.2-.103-.335-.106-.469-.003-.135.033-.268.103-.4.233-.468.59-.802 1.05-.938-.116-.401-.36-.735-.645-.934a1.854 1.854 0 00-.983-.335c-.315 0-.63.097-.927.234l-.348.2-.002-.001c-.278-.4-.543-.533-.868-.665a3.545 3.545 0 00-.75-.2c.285-.134.566-.2.838-.2.375-.001.71.135.99.403zM6.583 18.2c.199 0 .416.064.674.2.258.135.535.334.684.6.177.267.228.668.006 1.002a.99.99 0 01-.645.468c-.242.066-.517.066-.757-.002a2.424 2.424 0 01-.678-.334 1.178 1.178 0 01-.417-.6c-.065-.2-.064-.401.003-.535.133-.267.334-.468.535-.535.201-.066.335-.066.535-.066.068 0 .135-.003.201-.003z"/></svg> },
  { name: 'Bash', icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M2 5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5zm4 2l4 3-4 3v-2l2-1-2-1V7zm6 6h4v2h-4v-2z"/></svg> },
  { name: 'Kotlin', icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M24 24H0V0h24L12 12Z"/></svg> },
  { name: 'Android', icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M17.523 15.341a.997.997 0 100-1.995.997.997 0 000 1.995m-11.046 0a.997.997 0 100-1.995.997.997 0 000 1.995m11.405-6.02l1.997-3.46a.416.416 0 00-.152-.567.416.416 0 00-.568.152L17.14 8.947c-1.53-.7-3.25-1.09-5.14-1.09s-3.61.39-5.14 1.09L4.84 5.446a.416.416 0 00-.568-.152.416.416 0 00-.152.567l1.997 3.46C2.688 11.186.343 14.652 0 18.713h24c-.343-4.061-2.688-7.527-6.118-9.392"/></svg> },
  { name: 'Tailwind', icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"/></svg> },
  { name: 'Git', icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187"/></svg> },
  { name: 'AI Automation', icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855l-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z"/></svg> },
]

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-neutral-50/90 backdrop-blur-md border-b border-neutral-200">
      <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-center md:justify-center">
        {/* Mobile: logo */}
        <a href="#" className="md:hidden font-heading font-bold text-xl tracking-tight">
          NR<span className="text-neutral-400">.</span>
        </a>

        {/* Desktop: centered nav */}
        <div className="hidden md:flex items-center gap-12">
          {['Sobre mí', 'Proyectos', 'Contacto'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Mobile: hamburger */}
        <button
          className="md:hidden absolute right-6 p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="w-5 h-4 flex flex-col justify-between">
            <span className={`h-0.5 w-full bg-neutral-900 transition-all ${isOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
            <span className={`h-0.5 w-full bg-neutral-900 transition-all ${isOpen ? 'opacity-0' : ''}`} />
            <span className={`h-0.5 w-full bg-neutral-900 transition-all ${isOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
          </div>
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-neutral-200 bg-neutral-50">
          <div className="px-6 py-4 flex flex-col gap-4">
            {['Sobre mí', 'Proyectos', 'Contacto'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="text-neutral-500 hover:text-neutral-900"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-16">
      <div className="max-w-5xl mx-auto px-6 py-24 md:py-32 w-full">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.15 } }
          }}
          className="flex flex-col md:flex-row items-center gap-14 md:gap-20"
        >
          {/* Photo with innovative design */}
          <motion.div
            variants={fadeUp}
            className="relative group"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              {/* Animated gradient border */}
              <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-neutral-600 to-neutral-400 rounded-[2rem] rotate-6 group-hover:rotate-12 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-tr from-neutral-400 via-neutral-600 to-neutral-900 rounded-[2rem] -rotate-6 group-hover:-rotate-12 transition-transform duration-500 opacity-50" />

              {/* Photo container */}
              <div className="absolute inset-2 bg-neutral-50 rounded-[1.5rem] overflow-hidden">
                <img
                  src="/cv-bw.jpg"
                  alt="Nicolás Ramírez"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
              </div>

            </div>
          </motion.div>

          {/* Text content */}
          <div className="flex-1 text-center md:text-left">
            <motion.h1
              variants={fadeUp}
              className="font-heading text-6xl md:text-8xl font-bold tracking-tight mb-8"
            >
              Nicolás Ramírez
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-xl text-neutral-600 mb-10 max-w-lg leading-relaxed"
            >
              Apasionado por la tecnología.<br />Entusiasta de Linux y el software libre.
            </motion.p>

            <motion.div variants={fadeUp} className="flex gap-5 flex-wrap justify-center md:justify-start mb-8">
              <a
                href="#proyectos"
                className="px-8 py-4 bg-neutral-900 text-white font-medium hover:bg-neutral-700 transition-colors"
              >
                Ver proyectos
              </a>
              <a
                href="#contacto"
                className="px-8 py-4 border border-neutral-300 font-medium hover:border-neutral-900 transition-colors"
              >
                Contacto
              </a>
            </motion.div>

            {/* CV Downloads */}
            <motion.div variants={fadeUp} className="flex gap-6 flex-wrap justify-center md:justify-start">
              <a
                href="/nico_ramirez_CV_ES.pdf"
                download
                className="inline-flex items-center gap-2 text-neutral-500 hover:text-neutral-900 transition-colors group"
              >
                <svg className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                CV Español
              </a>
              <a
                href="/nico_ramirez_CV_EN.pdf"
                download
                className="inline-flex items-center gap-2 text-neutral-500 hover:text-neutral-900 transition-colors group"
              >
                <svg className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                CV English
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="sobre-mí" className="py-24 md:py-32 bg-white border-y border-neutral-200">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } }
          }}
        >
          <motion.h2
            variants={fadeUp}
            className="font-heading text-3xl md:text-4xl font-bold tracking-tight mb-12"
          >
            Sobre mí
          </motion.h2>

          <div className="max-w-3xl">
            <motion.div variants={fadeUp} className="text-neutral-600 space-y-4">
              <p className="leading-relaxed">
                Soy Nico, especialista en soporte IT y desarrollador viviendo en Rosario, Argentina. Después de seis años viviendo y trabajando en Barcelona y Berlín, regresé a casa con experiencia gestionando entornos tecnológicos de gran escala y un enfoque práctico para resolver problemas complejos.
              </p>
              <p className="leading-relaxed">
                Soy usuario diario de Linux, lo que me dió un entendimiento profundo de sistemas operativos y me mantiene constantemente aprendiendo. Esta experiencia con Linux me permite troubleshootear problemas desde la raíz y personalizar entornos de trabajo según las necesidades específicas de cada proyecto.
              </p>
              <p className="leading-relaxed">
                Más allá de lo técnico, me apasiona la intersección entre tecnología y creatividad. Toco la guitarra y el piano, y soy fanático de la literatura fantástica.
              </p>
              <p className="leading-relaxed">
                Creo que las mejores soluciones técnicas vienen de entender a las personas detrás de los problemas.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-10">
              <h3 className="font-heading font-semibold mb-4">Tecnologías</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-3 text-neutral-700"
                  >
                    <span className="text-neutral-500">{skill.icon}</span>
                    <span className="text-sm">{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function Projects() {
  return (
    <section id="proyectos" className="py-24 md:py-32 bg-neutral-50">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } }
          }}
        >
          <motion.h2
            variants={fadeUp}
            className="font-heading text-3xl md:text-4xl font-bold tracking-tight mb-12"
          >
            Proyectos
          </motion.h2>

          <div className="grid gap-8">
            {projects.map((project) => (
              <motion.article
                key={project.title}
                variants={fadeUp}
                className="group border border-neutral-200 hover:border-neutral-400 transition-colors overflow-hidden"
              >
                <div className="flex flex-col md:flex-row">
                  {/* Screenshot placeholder */}
                  <div className="md:w-72 aspect-video bg-neutral-100 flex items-center justify-center border-b md:border-b-0 md:border-r border-neutral-200 shrink-0">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="text-center text-neutral-400 p-4">
                        <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span className="text-xs">Screenshot</span>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-6 md:p-8">
                    <div className="flex flex-col h-full">
                      <div className="flex-1">
                        <h3 className="font-heading text-xl font-semibold mb-3 group-hover:text-neutral-600 transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-neutral-600 mb-4 leading-relaxed">
                          {project.description}
                        </p>
                      </div>

                      <div className="flex flex-wrap items-center justify-between gap-4 mt-4">
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1 text-xs text-neutral-500 border border-neutral-200"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center gap-4">
                          {project.demo && (
                            <a
                              href={project.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-neutral-900 transition-colors"
                            >
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                              </svg>
                              Ver demo
                            </a>
                          )}
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-neutral-900 transition-colors"
                          >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                            </svg>
                            Ver código
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contacto" className="py-24 md:py-32 bg-white border-t border-neutral-200">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } }
          }}
        >
          <motion.h2
            variants={fadeUp}
            className="font-heading text-4xl md:text-5xl font-bold tracking-tight mb-6 text-center"
          >
            Contacto
          </motion.h2>

          <motion.p variants={fadeUp} className="text-lg text-neutral-600 mb-16 text-center max-w-xl mx-auto">
            Si tenés alguna consulta o simplemente querés charlar, escribime.
          </motion.p>

          <div className="grid md:grid-cols-2 gap-16 md:gap-20">
            {/* Form */}
            <motion.form variants={fadeUp} className="flex flex-col gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Nombre</label>
                <input
                  type="text"
                  className="w-full px-5 py-4 bg-white border border-neutral-300 focus:border-neutral-900 focus:outline-none transition-colors text-lg"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-5 py-4 bg-white border border-neutral-300 focus:border-neutral-900 focus:outline-none transition-colors text-lg"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Mensaje</label>
                <textarea
                  rows={5}
                  className="w-full px-5 py-4 bg-white border border-neutral-300 focus:border-neutral-900 focus:outline-none transition-colors resize-none text-lg"
                  placeholder="Cuéntame sobre tu proyecto..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-5 bg-neutral-900 text-white text-lg font-medium hover:bg-neutral-700 transition-colors"
              >
                Enviar mensaje
              </button>
            </motion.form>

            {/* Social links */}
            <motion.div
              variants={fadeUp}
              className="flex flex-col justify-center"
            >
              <h3 className="font-heading text-xl font-semibold mb-8 text-center md:text-left">
                También podés encontrarme en
              </h3>

              <div className="flex flex-col gap-6">
                <a
                  href="mailto:ramireznicc@proton.me"
                  className="flex items-center gap-4 p-5 border border-neutral-200 hover:border-neutral-400 transition-colors group"
                >
                  <div className="w-12 h-12 bg-neutral-100 flex items-center justify-center group-hover:bg-neutral-200 transition-colors">
                    <svg className="w-6 h-6 text-neutral-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-neutral-500">Email</p>
                    <p className="text-neutral-900 font-medium">ramireznicc@proton.me</p>
                  </div>
                </a>

                <a
                  href="https://github.com/ramireznicc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-5 border border-neutral-200 hover:border-neutral-400 transition-colors group"
                >
                  <div className="w-12 h-12 bg-neutral-100 flex items-center justify-center group-hover:bg-neutral-200 transition-colors">
                    <svg className="w-6 h-6 text-neutral-700" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-neutral-500">GitHub</p>
                    <p className="text-neutral-900 font-medium">ramireznicc</p>
                  </div>
                </a>

                <a
                  href="https://linkedin.com/in/ramireznicc23"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-5 border border-neutral-200 hover:border-neutral-400 transition-colors group"
                >
                  <div className="w-12 h-12 bg-neutral-100 flex items-center justify-center group-hover:bg-neutral-200 transition-colors">
                    <svg className="w-6 h-6 text-neutral-700" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-neutral-500">LinkedIn</p>
                    <p className="text-neutral-900 font-medium">ramireznicc23</p>
                  </div>
                </a>

                <a
                  href="https://instagram.com/ramireznicc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-5 border border-neutral-200 hover:border-neutral-400 transition-colors group"
                >
                  <div className="w-12 h-12 bg-neutral-100 flex items-center justify-center group-hover:bg-neutral-200 transition-colors">
                    <svg className="w-6 h-6 text-neutral-700" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-neutral-500">Instagram</p>
                    <p className="text-neutral-900 font-medium">ramireznicc</p>
                  </div>
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="py-8 border-t border-neutral-200">
      <div className="max-w-4xl mx-auto px-6">
        <p className="text-sm text-neutral-500">
          © {new Date().getFullYear()} Nicolás Ramírez
        </p>
      </div>
    </footer>
  )
}

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
