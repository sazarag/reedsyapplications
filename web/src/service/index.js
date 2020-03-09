var apiUrl = 'http://localhost:3000/'

var _loadingActive = false


function showMessage (eventHub, title, message, messageType, hiddenMessage) {
  eventHub.$emit('show-message', {
    title: title,
    message: message,
    messageType: messageType,
    hiddenMessage: hiddenMessage,
    closeTime: 3000
  })
}

function getData (context, eventHub, loadingActive, url) {
  loadingActive = loadingActive || _loadingActive
  
  if (loadingActive) {
    eventHub.$emit('before-request')
  }
 
 return context.$http.get(url)
    .then(function (resp) {
      if (loadingActive) {
        eventHub.$emit('after-response')
      }
      
      var result = JSON.parse(resp.bodyText)
      console.log(result)
      return resp
    }, (err) => {
      if (loadingActive) {
        eventHub.$emit('response-error')
      }
      var message = ''
      
      if (err.status === 0 && err.ok === false) {
        var internetWarningText = 'Please check your internet connection!'
         showMessage(eventHub, internetWarningText, message, 'warning') 
      }

      if (err.status === 500) {
        if (window.location.pathname !== '/500Error') {
          window.location.href = '/500Error'
        }
      }

      return err
    }).catch((e) => {
      if (loadingActive) {
        eventHub.$emit('response-error')
      }
      var operationWarningText = 'Wrong Operation!'
      showMessage(eventHub, operationWarningText, e.message, 'warning')
      return e
    })
}

export default {
  
  /* Books */
  books: {
    getList (context, eventHub, loadingActive) {
      return getData(context, eventHub, loadingActive, apiUrl + 'books')
    },
    getDetail (context, eventHub, loadingActive, slug) {
      return getData(context, eventHub, loadingActive, apiUrl + 'books/' + slug)
    },
  },
 
 
}
