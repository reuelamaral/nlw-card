function criarCartao() {
  let VisitorsGithub = document.getElementById('txtg')
  let VisitorsInstagram = document.getElementById('txti')
  let VisitorsLinkedin = document.getElementById('txtl')

if (VisitorsGithub.value.length < 1) {
    VisitorsGithub.style.backgroundColor = '#ff00003f'
    alert(
      'Obrigatório preencher seu usuário do Github! Senão como vou gerar o seu crachazinho bb?'
    )
    VisitorsGithub.focus()
    return false
  } else if (VisitorsInstagram.value.length < 1) {
    VisitorsInstagram.style.backgroundColor = '#ff00003f'
    alert(
      'Obrigatório preencher seu @ do Instagram! Senão como vou gerar o seu crachazinho bb?'
    )
    VisitorsInstagram.focus()
    return false
  } else if (VisitorsLinkedin.value.length < 1) {
    VisitorsLinkedin.style.backgroundColor = '#ff00003f'
    alert(
      'Obrigatório preencher usuário do Linkedin! Senão como vou gerar o seu crachazinho bb?'
    )
    VisitorsLinkedin.focus()
    return false
  } else {
    localStorage.setItem('VisitorsGithub', JSON.stringify(VisitorsGithub.value))
    localStorage.setItem(
      'VisitorsInstagram',
      JSON.stringify(VisitorsInstagram.value)
    )
    localStorage.setItem(
      'VisitorsLinkedin',
      JSON.stringify(VisitorsLinkedin.value)
    )
    window.location.href = 'form.html'
  }
}

function criarCracha() {
  let VisitorsGithub = document.getElementById('txtg')
  let VisitorsInstagram = document.getElementById('txti')
  let VisitorsLinkedin = document.getElementById('txtl')

  if (VisitorsGithub.value.length < 1) {
    VisitorsGithub.style.backgroundColor = '#ff00003f'
    alert(
      'Obrigatório preencher seu usuário do Github! Senão como vou gerar o seu crachazinho bb?'
    )
    VisitorsGithub.focus()
    return false
  } else if (VisitorsInstagram.value.length < 1) {
    VisitorsInstagram.style.backgroundColor = '#ff00003f'
    alert(
      'Obrigatório preencher seu @ do Instagram! Senão como vou gerar o seu crachazinho bb?'
    )
    VisitorsInstagram.focus()
    return false
  } else if (VisitorsLinkedin.value.length < 1) {
    VisitorsLinkedin.style.backgroundColor = '#ff00003f'
    alert(
      'Obrigatório preencher usuário do Linkedin! Senão como vou gerar o seu crachazinho bb?'
    )
    VisitorsLinkedin.focus()
    return false
  } else {
    localStorage.setItem('VisitorsGithub', JSON.stringify(VisitorsGithub.value))
    localStorage.setItem(
      'VisitorsInstagram',
      JSON.stringify(VisitorsInstagram.value)
    )
    localStorage.setItem(
      'VisitorsLinkedin',
      JSON.stringify(VisitorsLinkedin.value)
    )
    window.location.href = 'form2.html'
  }
}

let VisitorsGithub = JSON.parse(localStorage.getItem('VisitorsGithub'))
let VisitorsInstagram = JSON.parse(localStorage.getItem('VisitorsInstagram'))
let VisitorsLinkedin = JSON.parse(localStorage.getItem('VisitorsLinkedin'))

const LinksSocialMedia = {
  github: VisitorsGithub,
  instagram: VisitorsInstagram,
  linkedin: VisitorsLinkedin
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    if (social === 'linkedin') {
      li.children[0].href = `https://www.${social}.com/in/${LinksSocialMedia[social]}`
    } else {
      li.children[0].href = `https://www.${social}.com/${LinksSocialMedia[social]}`
    }
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userGithub.href = data.html_url
      userPhotoProfile.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()
