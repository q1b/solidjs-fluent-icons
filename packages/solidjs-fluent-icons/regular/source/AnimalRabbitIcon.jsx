import { splitProps } from "solid-js";
function AnimalRabbitIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M10.51 15.01h2.12c.91 0 1.68-.57 1.99-1.37.88.07 1.79-.23 2.46-.9a3.15 3.15 0 000-4.45l-4.22-4.22c-.59-.59-1.55-.59-2.14 0-.6.6-.6 1.56 0 2.15l1.34 1.33c-.12.16-.22.33-.3.5a3.55 3.55 0 00-.54-.05H7.54c-.33 0-.65.05-.95.13A2.5 2.5 0 104 11.95v.93c0 1.18.95 2.13 2.12 2.13h4.39zm1.64-10.23L16.38 9a2.15 2.15 0 01-2 3.6l-.56-.13-.06.56c-.07.56-.54.99-1.12.99h-1.62v-.1C11 12.78 9.99 12 8.89 12H7.5a.5.5 0 000 1h1.39c.69 0 1.12.46 1.12.91v.1H6.12c-.62 0-1.12-.5-1.12-1.13v-1.33A2.55 2.55 0 017.54 9h3.68c.23 0 .46.03.68.1l.42.11.18-.4c.1-.26.26-.57.47-.79l.5-.48-2.04-2.02a.52.52 0 010-.74c.2-.2.52-.2.72 0zm-6.5 3.77a3.55 3.55 0 00-1.6 2.38 1.5 1.5 0 111.6-2.38z"/>
    </svg>);
}
export default AnimalRabbitIcon;
