const Alerta = ({alerta}) => {
    return (
      <div className={`${alerta.error ? 'from-teal-500 to-teal-500' : 'from-green-500 to-green-600'} bg-gradient-to-r text-center p-3 rounded-xl uppercase text-white font-bold text-sm mb-10`}>
          {alerta.msg}
      </div>
    )
  }
  
  export default Alerta