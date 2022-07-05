const fetch = require('node-fetch');

function handleErrors(error) {
  throw new Error(error.message)
}

async function checkStatus(arrayURLs) {
  try {
    const arrayStatus = await Promise
      .all(arrayURLs
        .map(async (url) => {
          const res = await fetch(url)
          return res.status
      }))
    return arrayStatus;
  } catch (error) {
    handleErrors(error)
  }
}

function generateURLsArray(arrayLinks) {
  return arrayLinks.map((objectLink) => Object.values(objectLink).join())
}

async function validateURLs(arrayLinks) {
  const links = generateURLsArray(arrayLinks)
  const linksStatus = await checkStatus(links)

  const results = arrayLinks.map((object, index) => {
    return {...object, status: linksStatus[index]}
  })
  return results
}

module.exports = validateURLs