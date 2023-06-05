import express from "express"

const { response } = express()

export const usuariosGet = (req, res = response) => {
  res.json({
    ok: true
  })
}

export const usuariosPost = (req, res = response) => {

  const body = req.body;

  res.json({
    message: "Post",
    body
  })
}

export const usuariosPut = (req, res = response) => {

  const id = req.params.id;

  res.json({
    message: "Put",
    id
  })
}