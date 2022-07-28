import { splitProps } from "solid-js";
function WindowBulletListAddIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M3 6a3 3 0 013-3h8a3 3 0 013 3v3.6c-.32-.16-.65-.3-1-.4V7H4v7c0 1.1.9 2 2 2h3.2c.1.35.24.68.4 1H6a3 3 0 01-3-3V6zm8.34 4c.79-.56 1.73-.9 2.74-.98a.56.56 0 00-.13-.02h-4.4a.56.56 0 00-.5.3.46.46 0 00.11.55c.1.1.25.15.39.15h1.79zm-5.76-.89a.97.97 0 00-.08.39c0 .14.03.27.08.4.04.12.12.22.2.31.1.09.21.16.33.21.12.05.26.08.39.08s.27-.02.4-.08c.11-.05.22-.13.31-.22a1 1 0 000-1.41c-.1-.09-.2-.16-.33-.21a.95.95 0 00-.38-.08.86.86 0 00-.4.08c-.11.05-.22.13-.31.22s-.16.2-.21.31zM5.5 13.5a.97.97 0 01.29-.7c.1-.1.2-.17.32-.22a.84.84 0 01.39-.08c.13 0 .26.03.38.08s.23.12.32.2a1 1 0 01-.7 1.71.97.97 0 01-.4-.07 1.1 1.1 0 01-.31-.2.84.84 0 01-.21-.32 1.2 1.2 0 01-.08-.4zM17 18.24a4.5 4.5 0 11-5-7.48 4.5 4.5 0 015 7.48zm-2.15-6.1a.5.5 0 00-.85.36V14h-1.5a.5.5 0 000 1H14v1.5a.5.5 0 001 0V15h1.5a.5.5 0 000-1H15v-1.5a.5.5 0 00-.15-.35z"/>
    </svg>);
}
export default WindowBulletListAddIcon;
