// helfy-modal.tsx

import { StyleSheet, Text, TouchableHighlight } from 'react-native';
import Modal, { ModalProps } from 'react-native-modal';

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
                    <Text style={styles.buttonText}>{'CLOSE'}</Text>
                </TouchableHighlight>
            }
        </Modal>
    )
};


const styles = StyleSheet.create({
    button: {
        marginTop: 16,
        paddingVertical: 8,
        paddingHorizontal: 16,
        backgroundColor: '#F54949',
        borderRadius: 100,
    },
    buttonText: {
        fontFamily: 'Lato_700Bold',
        fontSize: 18,
        color: 'white',
    }
});
