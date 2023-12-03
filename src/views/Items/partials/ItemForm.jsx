import { Controller } from 'react-hook-form'
import Input from '../../../compoents/Input'

const ItemForm = ({ errors, control }) => {
    return (
        <>

            <Controller
                name="name"
                control={control}
                render={({ field }) => (
                    <Input
                        label="Name"
                        id="name"
                        type="text"
                        placeholder="item name"
                        value={field.value}
                        onChange={field.onChange}
                        error={errors.name?.message}
                        labelRequired
                    />
                )}
            />

        </>
    )
}

export default ItemForm