import './index.css'

const BrowserHistory = props => {
      const {eachList,onRemoveHistory} = props 
      const {timeAccessed,logoUrl,domainUrl,title,id} = eachList

      const onDeleteHistory = () =>{
            onRemoveHistory(id)
      }

      return (
            <li className='history-container'>   
                  <div className='time-accessed-container'>
                        <p className='time'>{timeAccessed}</p>
                  <div className='image-container'>
                        <img src={logoUrl} alt={title} className='logo'/>
                        <p className='title'>{title}</p>
                        <p className='domain-url'>{domainUrl}</p>
                  </div>
                  </div>
                  <button type="button" className='delete-btn'
                  onClick={onDeleteHistory} >
                  <img src="https://assets.ccbp.in/frontend/react-js/delete-img.png" 
                  alt="delete" />
                  </button>
            </li>
      )
}



export default BrowserHistory