// helfy-common-modal.tsx

import { Keyboard, StyleSheet, Text, TouchableHighlight, TouchableWithoutFeedback, View } from 'react-native';
import Modal, { ModalProps } from 'react-native-modal';
import { CloseIcon } from '../icons/close-icon';
import { HelfyColorPalette } from '../theme';
import { IconButton } from './icon-button';


type HelfyCommonModalProps = {
    title?: string,
    headerColor?: string,
    height?: number | string,
    footer?: React.ReactNode,
    onClose?: () => void,
} & Partial<Omit<ModalProps, 'style'>>;


export const HelfyCommonModal = ({
    title,
    headerColor,
    height,
    footer,
    onClose,
    children,
    ...modalProps
}: HelfyCommonModalProps) => {
    return (
        <Modal
            {...modalProps}
            backdropOpacity={0.7}
            backdropColor='black'
            style={styles.modal}
        >
            { title && 
                <View style={{...styles.modalLabel, backgroundColor: headerColor}}>
                    <Text style={styles.modalTitle}>{title}</Text>
                </View>
            }
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={
                    height
                    ? {...styles.modalContent, height: height}
                    : styles.modalContent
                }>
                    {children}
                </View>
            </TouchableWithoutFeedback>
            {footer}
            {
                onClose &&
                <IconButton
                    onPress={onClose}
                    icon={<CloseIcon color={'black'} />}
                    onPressColor={styles.closeButton.backgroundColor + '80'}
                    style={styles.closeButton}
                />
            }
        </Modal>
    )
};


const styles = StyleSheet.create({
    modal: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    modalLabel: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginBottom: 20,
        paddingHorizontal: 24,
        borderRadius: 36,
        height: 36,
    },
    modalTitle: {
        fontFamily: 'Lato_700Bold',
        fontSize: 20,
        color: 'white',
    },
    modalContent: {
        width: '80%',
        backgroundColor: HelfyColorPalette.primary0,
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'center',
    },
    closeButton: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 12,
        backgroundColor: '#dedede',
        borderRadius: 100,
        marginTop: 20,
    }
});
