import Button from "../../../components/Button/Button"
const ServicesItem = () => {
  return (
    <div className="services-item">
    <div className="flex-content">
      <div className="icon-wrapp">
        <svg
          height="40"
          viewBox="0 0 30 30"
          width="40"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M25 24.5c0 .276-.224.5-.5.5s-.5-.224-.5-.5.224-.5.5-.5.5.224.5.5zM23.5 12h2c.277 0 .5.223.5.5s-.223.5-.5.5h-2c-.277 0-.5-.223-.5-.5s.223-.5.5-.5zm-3-2c-.822 0-1.5.678-1.5 1.5v14c0 .822.678 1.5 1.5 1.5h8c.822 0 1.5-.678 1.5-1.5v-14c0-.822-.678-1.5-1.5-1.5zm0 1h8c.286 0 .5.214.5.5v14c0 .286-.214.5-.5.5h-8c-.286 0-.5-.214-.5-.5v-14c0-.286.214-.5.5-.5zM14 19.5c0 .276-.224.5-.5.5s-.5-.224-.5-.5.224-.5.5-.5.5.224.5.5zM1.5 3C.678 3 0 3.678 0 4.5v16c0 .822.678 1.5 1.5 1.5H11v2H9.5c-.277 0-.5.223-.5.5s.223.5.5.5h8c.277 0 .5-.223.5-.5s-.223-.5-.5-.5H16v-2h1.5c.668 0 .656-1 0-1h-16c-.286 0-.5-.214-.5-.5V18h16.5c.277 0 .5-.223.5-.5s-.223-.5-.5-.5H1V4.5c0-.286.214-.5.5-.5h24c.286 0 .5.214.5.5v4c0 .665 1 .657 1 0v-4c0-.822-.678-1.5-1.5-1.5zM12 22h3v2h-3z"
            fill="#1f9cbe"
          />
        </svg>
      </div>
      <h3 className="service-name">Responsive Web Design</h3>
      <p className="description">
        Crafting seamless, visually appealing websites optimized for
        performance across all devices and screen sizes.
      </p>
      <Button type="button" className="services-btn">
        Learn more
      </Button>
    </div>
  </div>
  )
}

export default ServicesItem