import React from 'react';
import './style.css'
import Dropdown from 'react-dropdown';
import styled from 'styled-components';
import { FormControl, Modal, Button, InputGroup, } from 'react-bootstrap';
import 'react-dropdown/style.css';
import ProfileIcon from '../ProfileIcon/ProfileIcon'
import VideocamIcon from '@material-ui/icons/Videocam';
import FolderIcon from '@material-ui/icons/Folder';
import PollIcon from '@material-ui/icons/Poll';
import GifRoundedIcon from '@material-ui/icons/GifRounded';
import PermMediaRoundedIcon from '@material-ui/icons/PermMediaRounded';
import PhotoSizeSelectActualRoundedIcon from '@material-ui/icons/PhotoSizeSelectActualRounded';

import SendRoundedIcon from '@material-ui/icons/SendRounded'

class Popup extends React.Component {
    constructor(props) {
        super();
        this.state = {
            title: '',
            content: '',
            imageUrl: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUSExIVFhUVFhcXFRUXFxoWFhcYFxcWGBcWFxUYHSggGRolHRUVITEiJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGi0lHyYtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIALcBEwMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAADBAIFAAEGBwj/xABBEAABAwIDBQUHAgUDAQkAAAABAAIRAyEEMUEFElFhcSKBkaHwBhMyQrHB0VLhByNygvEUYqLSFSQzQ4OSk7LC/8QAGQEAAwEBAQAAAAAAAAAAAAAAAAECAwQF/8QAJBEAAgICAgICAgMAAAAAAAAAAAECEQMhEjEEUTJBIvATFMH/2gAMAwEAAhEDEQA/APPaZTtApVoTFNd0TjkWFB6I13rvSjHI9N8ea2TMmhumUZj0l75TDlfIhxGQ9GppcVgiibIsloaaVqdFAU51iUVtM/uLp2QAdcEHxUg/hzHrwRGkTlmLjKOKjRIBHImPA3+iQwrGkBHpoDCXGwMer+SZYITJZOFuFKFpjtECowNUoW1MNQAOFuETdWbqQA4WQibqzdQMgApgKQatwkBjQitQ1IJDDNKKwoDExSapZaGqIVhQakqZhHZUlZs1iWdOpwTTFW0XJptVYtGyY05yXete8UKj0qKsE5Yhl60qomzwam1Ga1ZSCIeS1RLZtro0Uw85+CCHFENQNgmU7FQCtjDYZEG5HBNUsW0tBJAvkVSVnXsgmqVl/I0y+CZ0L9oAGd2RFjMA5SrLC7RpugA3OkHqVyLK2XJMYfEljg4ZhVHMyZYk0dtRcDE5/UpikDquXwe14+O8nIWt1XTYapIa4ZECQdAcrrojNS6OacHElWpyJ4dckBlAcbB9+cqyjl+Ek6RLSDEsPdMZjwTZCDUzGV5vEafa0I1OlJvf6I1CjAk29alFDZ0tw/P4QIVdnbmPCfJba2BfW/OOHrip402DRrwnLXJZBNg2CdT+EWMHMwMr/QohqACYMan1mi4egBbd7+KNUpAiCiwEWY1pPDmmWkHIhV+Iwe6TGXNawuFnrKVjpFpurN1EYyBCluosQHdWt1G3Vm4iwBbqk1iLuKQalY0aY1FDoQyVjQkykw7CSmabkm1yMxyllpjzKiI2qq/3qLTeoovkWLaihUqpYVUOpVS4j5BDUWJF1ZaVcRcjyRpU5KxwCk1qRYvWEfX1CWr1JPBWJaHCDdQdhA7l6spcfQ0ysIJ4qFSgYnT91YVaBZpl4T64oDpiDkCVDRaYoGFGw9OSJkA6x9kXD4YvIAIHWftmmDhg0/EJ5ec5euCSQNlzs7Y7LPBLo4x3Xy8uKtqMw69gPR6KgwOO924s7RGfNvP9l0mDcXNDmiBEXzPW66YNfRyzv7HW7xMcr2y80DF0/wCYwAjtWysN0g5JjBVDuA9QeMgx3qGKbv1mAOiGlxPLLxV2ZLsfaziZ4cPD8rKlSDAu4/KM+p4DmeCXOEkjtPdoSXHusIsm6OGYMhE58+vFFhQBuDOZfc5/gckPE16dIS6pfUC5Pdpmp7XxFKlTJL2MdoTY92s5rznam12GWgyL2vfiSdeqwyZeOkdGLDy2ztHe1GHndDxP9TZnhE/dO/68VB2HCeonovIq9am7IQfPx/KNgtoVKRG6THA5d3A9FivIlezd+LFrR6bEE70zz0W6eIiRqeapth+0jKh3KtibTr+6tqtANJGeoPKLeua6YZFJaOWeNwdMtdn1d4aW4JtsFUVB0Hpfhnr64K5oCwk3ziSrszoNuLe6gYZ5O8JktN+dhceIsjNcHG2X1SsfE2WqJRt1a3ITECDVoohCyEDIhaL1p5Q0UFhWuRmvSzVsuSoaYyaiE+qguehOemkJyJGosQC5YqomzzpwW2uU6jc+4+KGWQVgdRIhFZVgWB5kafhRcLZKWHaC14I/SfP90CKyvXJzN+EfdLl91aYql8wI48CkXUd544m58/wspJ2axaBtJ4+jyU2OjX/CYLgAYbcWv+NEWhgHvbG6BOrjHgM0JA37Ew/gc/XemKG0KjLNe4DKATbuUm7NqtJIabcx5JjZ2zO1NRpj6c4mSimJuNHV7IxIqN3hN4NwReIMd7VmFxANZ28DLW7oAE5G/wDkrMGWsEiI3SLZWj90tgXuBc4NJ741ngfDouk5fZfVqg7G9Yzf/wBrsym6V75D1cqpwzg9wJdMZDICwyB1U9ubRFDDveCJiBOpdlHH9kSdKxRVujz32xxr6uJe9jgaYgMtOQAnvjwhcvUqOOaPiKjnXfkcuHRKVHDovOk7PVjGtGjUTGFrRr3aJIytAqSzomgWM2z5t/Lfp9em2TtR4hjzvN/5AcW8ei4TCY0tsclcYesCAWG4uBNx04t5IUnF2EoKSpnojxDQ9pDhoeSmzG9revYACLlxyiPXcqP2d9o2z7t4gu0+Vx4jg7krrDYFwioCC3IDmTlAy+67YZOXR5+TE4PZa4VhIhziCSZYIHygQTE8J0JVrSpboA4WSNM7lOcjBk2ueJKJg8RvEmTHrXz8FoZdj+6olqIy6luosVAC1CemXBLvCaExdyjCI4KBVEmiVElYSoOKYWae5Cc5beUIlUiWbJWlqViYjiXNv1aD5IZRn5j+gfRDItPr1ZczOs1OikMnAfp+iHvIwd2iBaRHlklYysrB2uZQWOuFYBjjYweSVLQ0xqMrW6XWTRomTwtYB286+gVycawNDgSbxz8DqqKoBoPX2WBvUpqTRLimX78YAczvRl69WW8NjA+xm5zsRMTZUcGM0cmwAjO/JVzZPBHS1aQDQ4ZAi+ciYz1TWzaRIsLEyT9oVRgqj3MgzE2njnHTVX2FO61oNrLaLsxloacwREAg6G64f+IuLLDTpO3twtluo3hYjusu6pm0+iqT2t2U3FYdzPnb2qZ4OAJg8iJHeCpypuOh4ZJTVnC7DwYxVGqwEb9IbzWwAXN1IOZi3iOK5vEMIMLofZo7uExNZh3auHfRqMcM7ktLTxaQXyOaLtJlHHOD8OPd1nAl9E2BcBvONM6jM3jJee9HqKmcqCpwp4nBvpmHtLTzGfQ6oaBmj5KdKsW3BUCttEoAtqOK3wP16aSfyu39jfaQ/C83Bh4Ik8N8CcxqJuvOqNAn4b8lbbMxDXOAc7cqZNqaEjIVB/8Ar6pJ07QSipKmex1qbnZBoBH/AIhJO8COAM3HgE1g8MGgMmwGQkfQ68Fzmxsdv04cd11PMeIjXUGO5WOGx0ENE2MCxm4NyT3LvhJSVnmTi4ujoqbQMlMpGlXIEH4jcDrkEehiA4SO/wDCokm9BcEchQITExZzUF6be1LvCpMhgCEJ6M9AqKhAXFDJU3KCok0sWliYrOHLzIvaPsspuJnhH3CUDpb0z7/XmiUH6cj+VwJnfQ21tkRoh0+skEPRKZkjqFpZJtzYPmk61AucTHf328b+CdLrTrkpUWn3b3HKQO/T6lSxrQLDjpeDw8Fp1Myey0aR/hRZUvBTAcCPiQBDD4C8/T91YNwbdRacznCDhawy18VYCCZzvKuKREmzb5DQBxCcaLAkybH/ABzStep2Z9erJjCvkAkaK09mT6HaVXj3aKGJb2HR+kkDnFkN/ISoCqdb+simxI8p9mcaGuqUnfBXYWHrfdPmfFdbsz2aedpYV1Pstf8AzalpDPdwK7Ohcdzq9cj7Q7Mdhq5gQ3emmeIzHeMjzC+gNiMY5ja7Y/msa6RkQQDI4SN2eMBee9aZ6i3TR5j7WYhgxPuXMIbvCd4djcAiwIvN76LncfsegT/JcRwGYPQcF2ft3Woe/wB59SJEAG4tyOi4LG1vdvFWi5usEXHgclkkb2V2JwhYYJhCbA1J6W8yj0g+u8ucep9aq1w2zRnHRbwxORz5M0YFXQxG6Qd0jnJJ/dXFClSqdpxI4vA3gObm2O7zGWoT1LZTCJdlwGvemqeCpNPYHu3aFtvLI960fjP6Zh/eitNHR+ztDdZvS2oCGjfEPBA1EXmLLpdnsYBO8DfSMzfLj+F5thtqOw9Tfs0gxVaBNKo0/MW5t6iYPeR21CgMQz3tKoCN2zTJjkXkk8crJ4ZV+LFnjf5rpljtLEaAl0DeLYu4XEf0zFuUJjZrSM5M3tcWy7WoVVgNmtjtPebguYSGjQw5oFx1mVfUnDgO/rwWxgNBaIU1opiAuCC9qYKG4KkSxOoEtVCcqBLVQrRDFHBRIRXBQVEgyFiksQI82pCCJdyNtDZTFiCCDB+iWw75cJyDmk8NJRXVIJJi7jkOOnmvNs9Kh0DyTWGGswLfUevFJU64Njmb/dFFSBB14cdFamiGgrn3PencHHuHyQJyvwIJsq3EEbxjIk/VW2y6E0atxZjyBr8n2VXsRXNDc7+SLTpggwSeUfvdLTAU6Y+yYDO5a3ceJ6o284GBOfqEoKhzv4pqvUhxbwP2QiWGrGWgDjl3KzYdFTU7lo6p7fde6uL2RJDlaqAJ4ILq0X4pc1pN8tUM/pIiIAN8s/qU3ISiGqbEZii2nUFnRcZi8kgxa32XTe0O3aWEpbrY7DAGsbkABDRGghVewm/zAYyab+C5X+I1TdqNEdt8jvIIHhM9y5cu5Hbh+Fh/ZHZzcaKtau0Oc9wcJEw3tAAcrDxSv8Q/ZqnQoUH02hs1Sxx47wBHhunxXR+xtD3NHeEXho4brBH/ANi8f2hV/wDEzbIfhW0Cwbz6rSw70/BMkCOcf3KZJKVFQk3G2crh6DWM7IkNExxPMotZsNLqjuyPlbYO4AnM/Tkh06L/AHYpi0xvE5xIsBz4+SUxNb31ZtIGWszPE6ldr0jhSbfZbNrEtBOZvHDgEvXrZIuKKTeez3pyZEI/YXHU5YKnDsu/pdb11V97Guq0bt7VImmHjPdNRu8DGoBsevNU1LtUajNS23UXC7f2Twm7h2tdY6xx0kDWwz6rnlG8lnTCdYnF+zpey7MXix/6Toj0aZB480BlYCA7sk3AOQ6OTjawtqTktrMKDNHFYVsFacUDBuQ3qbilMTV5qkSyNZ4Sz6gNlF5J1S5bfNWjNhHhCKO4ITwrRIMlYsKxMR5eRCix/a4ShvqLRHG0jxuR9l5Z6g2WFtrzPnJjyQBiosQec2y9eSjUqRORiw5efJB99JJIAnz52SAtRUNpjjfgeeoV7svarGMfScLuD4M5FzWgRxMtC5hj752EC9/GM01hMOHH4ol2Zm3qwTtkuI4EVpgIZbA9XWE2WqZDQQXTjhNU34N/4x428UhTMmO6/Mq2psjERHzE9JaXd+aYgNN/bItwnhLgFN1a8dyDhKwBnQxPSR5aoeIqD5UJ0S0HquvMLb6sMAJjgOMzzVc7EmEJj3G02H1iyTkNRO59kSXbxMACG27y6T4W5rj/AGyPvMfTGjAXHu/yuv8AY9u7ht7iXHz3fsuYoAVce9/6d0eEu84hZRdzv90by1jpff8Ap0ob7um1mrWgcidT0Lr9647bMPr72e4NxnAH5ndSbdy6naFeGk8AT4BcqKw0z1PX0Vp48LbkzLycjilFCO1KppsgGXusOXFIezmHgOedTA7s/NQ2lid6o46NEBWeCpblNreAE9dVv8p36Mfjjr7YLGPSuMdDWo2IddIbUqfCFM3pl449FlsV5e9jW5ueAvTKOAfuNAa0OAgPFjlk8Wkd8rzn2ZokkFvxC4HHiB/uyjjlqvR9gbUbVb8XaFnNyII639FRGVyplzjUbQOnQxAt2L2MvLj1s2WidJOatsFSIj3gIcbW+Gc5BHrkmqY7kYFa0Y8ggK04rUqLimJg62SrqpTtZ1lWVXeuqpESMNRAqVIut1EvUqdnvy6qyQjcZobKZrA6qqrVROeqmyLXHK90xND+8sQpWJknlIEgmcv2Tb6oseAF+QsPoEuyI1M3vZQNSMhy/fzXlPZ6plTdN5WCNINx5TkhOfP5W2E5Dj90hjpf2jHZygjSAL+uKuPZ3Be+LpcAA0m4kkkEDziOqopkgLqvY1g99JBIaJ5TlPPlzVrsmXRWNf2jHHp5dyKdRwv6PeoVPicfduIY4tkHgf0gZa58UzSDyOyy39INs9ZJVWZshg3S4X+YDzCtcPXLsU027Tg3xaGx5qppu7TTMQdOSMKkVQ+cnB894cnYuyAk6jootJnMwmMZDa1Ro+Wo8HluuIQpnh65osKIuZN7D9uixrSLyAMyRHnMDxhQdUvb9lhADZLrzEDx8OaQI7bYT/8Auoj/AHDT9TuBK43B4k0sTXfuy0gA3gzJNuJsup2JUH+jaRoX+O85cjtjGNo0y4iXPcS1vEn7AAeiljinJ30aZZuMFx7YztDbjX03Na1wJIB3hFiZ43yKrK1XcpudrAjmZMffwSGxmPfvOf8AM7eJ5AfvEKHtJiN3cYMo3j9vut41CFowknPJxF8AzecBnfePd+8K7rvAHRVuwaJIdUOU7gPMAOIn+4IuMcqhqNhkVzr0CdVmUliDvOAU6lYAGFvANvvHJZSd6NoqlZcYGt7osMEj5iBMA5kjgF2eF2YHvbXpVS06uaAWvAtJBvvfbuVP7IYZ28XuIAeGFjXCzgZyIyMHvkjMW6/A0RTLg2zSfh0BgTHDonGNuzOc6XEtcIXboDyC7UgQD3aJpiTamGPW9HPYaVBzlA1ENz0UDZlQpOsJR3uS1UqkQxZ9pCRxE6JusckKo6GqgKquzqUMG9lYVIPJLupckFWC9+eJ8SsWzT5LEbDR5j743TDYIzgx0Hf3KFKiCf2v4dyg47p4c15h6JNxHf5KTMvXrismW3bwM8oEIlMCR3iM/pZAD7aRAB1IAnnE59FZ+zbd5zosBunez3bnSCDI0P5VTi6g3GAZi067oa0QeVrcirLY2KLWv3HlpduAgEAENM3J5gW6qkTIB71zKjhvRLiJ79CeiYqY/cI3KjTBgiLdY8ckltF5FWpIFnv7+2fFAaJFhdIlxRYVsTvyXmTyHd9FY4GnvCdCyND8k9dFzbHlpvlxF4Vph3neMH/y3Gf/AEzp6shBxHttvHvam7PxuceckwJ5A+ZVa2oeKsfaTcFeoWkyQxwtbtsY6/iT3hVFB8kD1AufJVYkOB9o9aIdasdyJ+aUuahOXio+87BJ4gTw1QOi42FtQsY+kcn3bydEeY+iXxWHbVcXntQSxo0aGmD3kiVDZEXcflEyoYsEb1UGOP8AuOk8TzW2GPbMc0rain+sb3AxuXQDU6dy5/2iw7n1KTQJe/shozJLoAHeQFvaO2KgA3REjPPwXV/wv2Me1tCtJIllGeOT393wj+7gjPlVUV42CSlyZ1Wz9k0sJg2YZ4a6BL5AIc83cfGw5ALkts7DpXdTJZy+Ied10j8O+rUNSo6GA9lv3VF7TY9jGOg3ANui4FOS6PScIvtHntY/zHNF4MTxjNP4Bo95Spm4c9m90LhISGC1J6kqz2HQJqteflO8e7IeMea6onJNnpmDqgb1gDP6Y9FEbi+2Rxg/UH7Ln8Di4nqtVcaQ7NdHJUcfB2dfSxMm2X1TTKy4yhtqHk5jgrfCbS3mybHVUpJmcotF775Z71c9/wBrM1cETDbRDnWNsu9VaJpl056C9yW/1I4rDUVCNVHJWo4olQqDh539eCBoAHQtVaq28INQpjNe8W0A9ViB0cAyoOlv3+wQXMzdBjP1xRBTORB6mfBagi3+F5Z6QJrybIu5ca3jvv8Ahbp0hnkR5DktNmR1QAyXi2flrlA/KJTkEgOA0uIt1QS5xcd35YEWyHBRDxI7RGcxY6RBQyWg7HSSDeJyv3+SkaEGb8jobSM1CjtLdkbzxc5GL+du5YcWSSTnkTO95gfRLYtkw4xl359xMp3DVBJPFrh3uY5v3IVZ/qJPS0/REFaTBKewovvaWpIoOn48NRJiM2B1K3/xjyVW2bECVN2JD2tv8LdxovYAudH/ACKr31nHkndiosGMkgGJJjNLGmQN12pB6epS7KhGpF5MfUcEz79tgctP2RdAPUGbtIiQMi4nLdBH1k+ChtA79QUm/CwS7m45eSYqhoHaALWtkjS3aNuo80ng2ndk/E8yTzcfsCu2KqKRxt3JyIUsH7yoGASSWtaNN52XmR4L1h2HZRosos+Gm0NHOBcnmTJ71xP8OcH7yu6sR2aUn+98hvgN4+C6/ada8Lk8iW6PQ8eLStlTtXHlohq819pMbLtyZMy48OA+66v2m2kKbSRc5NHE6LhKdImS65NyVljhbs2yTSVBMNWaARc9yutlx7oOm7pNusAHw+qpqdPUZsv1Gvhn4qw2a7dJZoe23viQPLwXQ7OV0WlGsWqdWrJnJLGpdQNTJCeiaHmxnCL/AKkgWKrnYhQdWKmxcRwvlNYXFFvRVLakIgrQEraBxLhmOJMyrDDbRvcrl24jJFo4lUptEPGmdZQxe8Y4Jp9XepjqL9Jj6lclh8Sbqyp7T3WbuckeS2jm9mbx10WDqkSlqrkpTxU34rT60rVTTFxCFx4rEoa/NYjkVRzVR8ZPInjJUxWBtutcYkGInI6LFi81HYQwVQukOvy+uaWqVYJacgTz1+q0sVLsY7s10zeCbAG4MZ6WUMTShzjAMX+xPVYsS+xAnBpMgR616XvryW2k5xYWnSTrGi0sQBAttmt70W4Z/lbWKgJ0q0GZWVHW7r9dFixAAaZaM/RRGCSPQWLEAy22xVin/W7d6DtOP0CG2pDSeDfXlKxYu59s4or8Uem+y+zxhsGwfPUHvX/1PAIHc3dHcq7amJiSVixeZJ2z1oqkeY7Wxxr1T+llgOepQ1ixdWNVE5cjuRFjr90eNkfBuljKn6SWnp/glaWJrsh9FkXgW3iD0t0JmfJQq5TIPTu4raxZsYpv3U/eXWLEDNhyi56xYgRFjypsqQVixAxxlWNFIVZWLEiAlGrFkX3yxYqTaE0LnEBYsWKuTCj/2Q=='
        }
    }
    title(e) {
        this.setState({
            title: e.target.value
        })

    }
    content(e) {
        this.setState({
            content: e.target.value
        })
    }
    Add() {
        console.log('new post ', this.state)
        this.props.AddPosts(this.state);
    }
    render() {
        return (
            <div>

                <Modal className="w-5 h-100" show={true} onHide={this.props.closePopup} animation={false}>
                    <Modal.Header closeButton>


                        <div className='row'>


                            <div className='col-sm-3'>

                                <ProfileIcon />
                            </div>
                            <div className='col-sm-4'>
                                <h5>     sagar</h5>


                                <h6 className='text-muted'>   student,NIT kurukshetra</h6>
                            </div>
                            <div className='row col-sm float-right'>

                                <h6>

                                    <span style={{
                                        display: 'inline-block',
                                        borderRadius: '50%',
                                        width: '50%',
                                        backgroundColor: 'red',
                                        height: '15px',
                                        width: '15px',
                                        marginTop: '10px'

                                    }} >

                                    </span>
                    go live

                    <VideocamIcon color={'primary'} />
                                </h6>
                            </div>
                        </div>


                    </Modal.Header>
                    <Modal.Body className='h-50'>
                        <div className='row'>
                            To <span className='text-primary ml-1'>

                                {`MATHEMATICS 101`}
                            </span>
                        </div>
                        <div className='row'>
                            <input placeholder="Title of the Post..."
                                onChange={this.title.bind(this)} style={{ marginBottom: '40vh', 'width': '100vw', borderStyle: 'none' }} className="mb-3" size="lg">
                            </input>
                            <input placeholder="Your Post Here..."
                                onChange={this.content.bind(this)} style={{ marginBottom: '40vh', 'width': '100vw', borderStyle: 'none' }} className="mb-3" size="lg">
                            </input>
                        </div>







                    </Modal.Body>
                    <Modal.Header />

                    <Modal.Body>
                        <div className='row Container'>
                            <div className='col-sm-3 design ml-3'>

                                <FolderIcon color={'light'} />
                        files
                        </div>
                            <div className='col-sm-3 design ml-3'>
                                <PollIcon />
                    poll
                        </div>
                            <div className='col-sm-3 design ml-3'>
                                <GifRoundedIcon color={'light'} />
                    Gifs
                        </div>
                        </div>
                        <div className='row mt-1'>

                            <div className='col-sm-3 design ml-3'>

                                <FolderIcon color={'light'} />
                        files
                        </div>
                            <div className='col-sm-3 design ml-3'>
                                <PhotoSizeSelectActualRoundedIcon color={'light'} />
                    photos
                        </div>
                        </div>

                    </Modal.Body>


                    <Modal.Footer >

                        <h6 className='text-muted col'>
                            101 will see this
                </h6>

                        <Button variant="primary" onClick={this.Add.bind(this)}>
                            Post
            </Button>
                        <Button variant="primary" onClick={this.props.closePopup}>
                            <SendRoundedIcon color={'inherit'} />
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>

        );

    }
}

export default Popup;