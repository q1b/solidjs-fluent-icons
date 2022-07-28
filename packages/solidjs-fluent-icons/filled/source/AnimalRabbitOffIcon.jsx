import { splitProps } from "solid-js";
function AnimalRabbitOffIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M2.85 2.15a.5.5 0 10-.7.7L7.3 8.01c-.44.02-.86.13-1.25.3A2.12 2.12 0 104 11.22v2.21C4 14.3 4.7 15 5.56 15H10v-1.25c0-.16-.08-.34-.28-.49-.2-.15-.49-.26-.82-.26H7.5a.5.5 0 010-1h1.4c.54 0 1.05.17 1.43.47.39.3.67.74.67 1.28V15h1.74c.43 0 .82-.18 1.1-.45l3.3 3.3a.5.5 0 00.71-.7l-15-15zm14.06 10.39c-.42.42-.94.67-1.48.77l-5.3-5.3h.67c.47 0 .92.09 1.33.25l.08-.13c.11-.19.23-.4.38-.55l-1.55-1.56a1.16 1.16 0 111.64-1.64l4.23 4.23a2.78 2.78 0 010 3.93z"/>
    </svg>);
}
export default AnimalRabbitOffIcon;
