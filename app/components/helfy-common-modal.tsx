// helfy-common-modal.tsx

import { Keyboard, SafeAreaView, ScrollView, StyleSheet, Text, TouchableHighlight, TouchableWithoutFeedback, View } from 'react-native';
import Modal, { ModalProps } from 'react-native-modal';
import { CloseIcon } from '../icons/close-icon';
import { HelfyColorPalette } from '../theme';
import { IconButton } from './icon-button';


type HelfyCommonModalProps = {
    title?: string,
    headerColor?: string,
    height?: number | string,
    width?: number | string,
    footer?: React.ReactNode,
    onClose?: () => void,
    scrollable?: boolean,
} & Partial<Omit<ModalProps, 'style'>>;


export const HelfyCommonModal = ({
    title,
    headerColor,
    height,
    width,
    footer,
    onClose,
    children,
    scrollable,
    ...modalProps
}: HelfyCommonModalProps) => {
    return (
        <Modal
            {...modalProps}
            backdropOpacity={0.7}
            backdropColor='black'
            style={styles.modal}
        >
            <SafeAreaView style={styles.modalContainer}>
                { title && 
                    <View style={{...styles.modalLabel, backgroundColor: headerColor}}>
                        <Text style={styles.modalTitle}>{title}</Text>
                    </View>
                }
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    {
                        scrollable
                        ? (
                            <View
                                style={[
                                    styles.modalContent,
                                    { height: height },
                                    { width: width || styles.modalContent.width },
                                ]}
                            >
                                <ScrollView
                                    style={styles.scrollableModalContent}
                                    contentContainerStyle={{ justifyContent: 'center', alignItems: 'center' }}
                                >
                                    {children}
                                </ScrollView>
                            </View>
                        ) : (
                            <View style={[styles.modalContent, { height: height }, { width: width || styles.modalContent.width }]}>
                                {children}
                            </View>
                        )
                    }
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
            </SafeAreaView>
        </Modal>
    )
};


const styles = StyleSheet.create({
    modal: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    modalContainer: {
        width: '100%',
        height: '90%',
        alignItems: 'center',
        justifyContent: 'center'
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
    scrollableModalContent: {
        width: '100%',
        backgroundColor: HelfyColorPalette.primary0,
        borderRadius: 16,
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
