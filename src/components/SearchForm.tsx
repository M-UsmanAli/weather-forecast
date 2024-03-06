import { Button, HStack, Input, Text } from "@chakra-ui/react";
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from "react-hook-form";
import { z } from "zod";


const schema = z.object({
    weather: z.string().min(3, { message: 'Description should be atleast 3 characters' }).max(20, { message: 'Description should not exceed 10 characters' }),
})
type WeatherFormData = z.infer<typeof schema>

interface Props {
    onSubmit: (data: WeatherFormData) => void
}

const SearchForm = ({ onSubmit }: Props) => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm<WeatherFormData>({ resolver: zodResolver(schema) })

    return (
        <div>
            <HStack>
            <form onSubmit={handleSubmit((data) => { onSubmit(data), reset() })}>
                <Text fontSize='2xl' fontWeight='bold'>City Name:</Text>
                <Input {...register('weather')} id="weather" type="text" className="form-control" paddingY={1} />
                {errors.weather && <p className="text-danger">{errors.weather.message}</p>}
                <Button colorScheme="green" type="submit" marginTop={2}>
                    Submit
                </Button>
            </form>
            </HStack>
        </div>
    )
}

export default SearchForm