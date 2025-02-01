document.addEventListener('DOMContentLoaded', () => {
    initMasonry()
  
    handleRequestInfoForm()
  
    handleExperiences()
  })
  
  function initMasonry() {
    const elem = document.querySelector('.masonry-job-info')
  
    const msnry = new Masonry(elem, {
      itemSelector: '.masonry-item',
    })
  
    return msnry
  }
  
  function handleRequestInfoForm() {
    const $form = document.querySelector('.request-info-form')
  
    const $formHelper = document.getElementById('email_helper_block')
  
    $form.addEventListener('submit', (e) => {
      e.preventDefault()
  
      if (validateForm()) {
        toggleFormInfo()
      } else {
        $formHelper.classList.add('text-danger')
      }
    })
  
    function toggleFormInfo() {
      document.querySelector('.personal-info-wrapper').classList.remove('d-none')
  
      $form.classList.add('d-none')
    }
  
    function validateForm() {
      const inputValue = document.getElementById('email_input').value
  
      if (!inputValue) {
        $formHelper.textContent = 'Email là bắt buộc.'
  
        return false
      }
  
      const validateRes =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          inputValue
        )
  
      if (!validateRes) {
        $formHelper.textContent = 'Email sai định dạng.'
      }
  
      return validateRes
    }
  }
  
  function handleExperiences() {
    const $elments = document.querySelectorAll('.experience-item')
  
    for (const $item of $elments) {
      const $title = $item.querySelector('.experience-title')
      const $btn = $item.querySelector('.experience-helper .btn')
  
      const handler = (e) => {
        e.preventDefault()
  
        toggleCssClass(
          $item.querySelector('.experience-content'),
          'd-none',
          () => {
            initMasonry()
          }
        )
      }
  
      $title.addEventListener('click', handler)
      $btn.addEventListener('click', handler)
    }
  }
  
  function toggleCssClass($el, className, callback = undefined) {
    if ($el.classList.contains(className)) {
      $el.classList.remove(className)
    } else {
      $el.classList.add(className)
    }
  
    if (callback) {
      callback()
    }
  }
  