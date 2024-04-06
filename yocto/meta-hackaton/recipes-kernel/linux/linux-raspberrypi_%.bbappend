FILESEXTRAPATHS:prepend := "${THISDIR}/${PN}:"

unset KBUILD_DEFCONFIG

DEPENDS += "lzop-native"

SRC_URI += "file://defconfig"