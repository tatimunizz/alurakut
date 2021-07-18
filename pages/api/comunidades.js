import { SiteClient } from 'datocms-client'

export default async function receberdorDeRequests(request, response) {

    if (request.method === 'POST') {
        const TOKEN = `${process.env.NEXT_PUBLIC_DATO_CMS_TOKEN_FULL}`;    
        const client = new SiteClient(TOKEN)

        //próxima tarefa: validar os dados antes de salvar o registro
        const registro = await client.items.create({
            itemType: '974376',
            ...request.body
            // title:
            // imageUrl:
            // creatorSlug
        })

        response.json({
            registro: registro,
        })
        return;
    }

    response.status(404).json({
        message: 'Não tem nada aqui'
    })

}