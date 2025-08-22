import api from "../../../utils/api"

import { useState, useEffect } from 'react'

/* hooks */
import useFlashMessage from "../../../hooks/useFlashMessage"

import styles from '../../../components/AddPet/AddPet.module.css'

const EditPet = () => {
  return (
    <section>
      <div className={styles.addpet_header}>
        <h1>Editando o Pet: 'pet.name'</h1>
        <p>Depois da edição, os dados serão atualizados no sistema.</p>
      </div>
    </section>
  )
}

export default EditPet