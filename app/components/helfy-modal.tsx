// helfy-modal.tsx

import { StyleSheet, TouchableHighlight } from 'react-native';
import Modal, { ModalProps } from 'react-native-modal';
import { CloseIcon } from '../icons/close-icon';

type HelfyModalProps = {
    onClose?: () => void,
} & Partial<ModalProps>;


export const HelfyModal = ({
    children,
    onClose,
    ...modalProps
}: HelfyModalProps) => {
    return (
        <Modal {...modalProps}>
            {children}
            { onClose &&
                <TouchableHighlight
                    onPress={onClose}
                    style={styles.button}
                    underlayColor={styles.button.backgroundColor + '80'}
                >
                    <CloseIcon color={'white'} />
                </TouchableHighlight>
            }
        </Modal>
    )
};


const styles = StyleSheet.create({
    button: {
        marginTop: 20,
        padding: 12,
        backgroundColor: '#F54949',
        borderRadius: 100,
    }
});
